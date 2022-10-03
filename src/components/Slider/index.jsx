import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./styles.scss";

const Slider = () => {
  gsap.registerPlugin(ScrollTrigger);

  let container = document.getElementsByClassName("horizontal");
  let first = document.getElementsByClassName("first");
  let second = document.getElementsByClassName("second");

  let right = document.getElementsByClassName("right");

  useEffect(() => {
    gsap.to(first, {
      x: "30vw",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to(second, {
      x: "40vw",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to(right, {
      x: "-10vw",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div>
      <div className='section horizontal'>
        <div className='slider left first'>
          {[...Array(12)].map((e, i) => {
            return (
              <div class='slider-img-container left' key={i}>
                <img
                  alt={`image-${i}`}
                  src={`https://source.unsplash.com/random/1080x720?sig=${
                    (Math.random() * i + i * 8) ^ 2
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className='slider right'>
          {[...Array(12)].map((e, i) => {
            return (
              <div class='slider-img-container left' key={i}>
                <img
                  alt={`image-${i}`}
                  src={`https://source.unsplash.com/random/1080x720?sig=${
                    (Math.random() * i + i * 3) ^ 2
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className='slider left second'>
          {[...Array(10)].map((e, i) => {
            return (
              <div class='slider-img-container left' key={i}>
                <img
                  alt={`image-${i}`}
                  src={`https://source.unsplash.com/random/1080x720?sig=${
                    (Math.random() * i * i) ^ 2
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
