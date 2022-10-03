import React, { useEffect } from "react";
import "./styles.scss";
import { Back, Slider } from "../../components";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Random = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline();

  const scrollTrigerParallaxImages = {
    trigger: ".random-landing",
    start: "top top",
    end: "bottom top",

    scrub: true,
    toggleActions: "play reverse resume none",
  };

  const exploreImageScroll = {
    trigger: ".random-landing",
    start: "center end",

    scrub: true,
    toggleActions: "play reverse resume none",
    ease: Power3.easeOut,
  };

  useEffect(() => {
    gsap.to(".under", {
      y: -100,
      opacity: 0.5,

      scrollTrigger: scrollTrigerParallaxImages,
    });

    gsap.to(".above", {
      y: 100,
      opacity: 0.5,

      scrollTrigger: scrollTrigerParallaxImages,
    });

    gsap.to(".header-text", {
      x: 200,
      opacity: 0,
      scrollTrigger: scrollTrigerParallaxImages,
    });

    gsap.from(".explore-img", {
      width: "0%",
      scrollTrigger: exploreImageScroll,
    });

    gsap.from(".explore-second-img", {
      height: "0%",
      scrollTrigger: {
        trigger: ".explore-section",
        start: "center-=150 center",
        end: "bottom bottom",
      },
    });

    gsap.from(".text-container h1", {
      opacity: 0,
      duration: 1.5,
      delay: 0.25,
      scrollTrigger: {
        trigger: ".random-landing",
        start: "bottom+=100 bottom",
      },
    });

    gsap.from("#test", {
      opacity: 0,
      y: 20,
      delay: 0.4,

      scrollTrigger: {
        trigger: ".random-landing",
        start: "bottom+=100 bottom",
      },
    });

    gsap.from(".text-container button", {
      opacity: 0,
      y: 20,
      delay: 0.7,

      scrollTrigger: {
        trigger: ".random-landing",
        start: "bottom+=100 bottom",
      },
    });
  }, []);

  return (
    <>
      <Back />

      <section className='random-landing'>
        <div className='left-container'>
          <div className='text-container'>
            <h2 className='header-text'>Random images</h2>
            <h2 className='header-text'>to brighten up</h2>
            <h2 className='header-text'>your day.</h2>
          </div>
          <div className='img-box above'>
            <img
              loading='eager'
              alt='above'
              src={`https://source.unsplash.com/random/1920x1080?sig=${
                Math.random() * 20
              }`}
            />
          </div>
        </div>
        <div className='right-container'>
          <div className='img-box under'>
            <img
              loading='lazy'
              alt='under'
              src={`https://source.unsplash.com/random/1920x1080?sig=${
                Math.random() * 20
              }`}
            />
          </div>
        </div>
      </section>
      <section className='explore-section'>
        <div className='left-container'>
          <img
            className='explore-img'
            alt='explore'
            src={`https://source.unsplash.com/random/1920x1080?sig=${
              Math.random() * 150
            }`}
          />
        </div>
        <div className='right-container'>
          <div className='text-container'>
            <h1>Explore</h1>
            <span id='test'>
              Every day you get the opportunity to learn, see and experience
              something new. Why not try it right now? Don't be afraid!
            </span>
            <button>Start now</button>
          </div>
          <div className='explore-second-img-container'>
            <img
              className='explore-second-img'
              alt='explore'
              src={`https://source.unsplash.com/random/1920x1080?sig=${
                Math.random() * 1235
              }`}
            />
          </div>
        </div>
      </section>
      <Slider />
      <section className='parallel-section'></section>
    </>
  );
};

export default Random;
