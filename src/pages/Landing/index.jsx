import React, { useEffect } from "react";
import "./styles.scss";

import { gsap } from "gsap";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  let tl = gsap.timeline();

  let FollowBox = ".cursor";
  gsap.set(FollowBox, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });

  window.addEventListener("mousemove", (e) => {
    gsap.to(FollowBox, {
      duration: 0.5,
      left: e.pageX,
      top: e.pageY,
    });
  });

  useEffect(() => {
    tl.to(".landing-section", { duration: 0, css: { visibility: "visible" } })
      .to(
        ".header-text",
        { duration: 1.4, translateY: "0%", stagger: 0.2 },
        "start"
      )
      .to(".line", { duration: 1.5, width: "50%", delay: 0.3 }, "start")
      .to(".line-button", { duration: 1, opacity: 1 }, "second")
      .to(
        ".moto-text",
        { duration: 1, opacity: 1, x: 0, stagger: 0.2 },
        "second"
      );
  }, []);

  const goToIdeaPage = () => {
    gsap.to(".ideas-container", {
      duration: 1,
      top: "50%",
      left: "0%",
      height: "100vh",
    });

    gsap.to(".test", {
      duration: 1,
      color: "transparent",
      fontSize: "calc(15rem + 30vw)",
      stroke: 3,
      ease: "slow(0.7, 0.7, false)",
      webkitTextStroke: "0.5rem black",
      onComplete: () => navigate("/ideas"),
    });
  };

  return (
    <section className='landing-section'>
      <Navbar />
      <div id='Wrap' className='cursor' />
      <div className='left-container'>
        <div className='text-container'>
          <h1 className='header-text'>Make something</h1>
        </div>
        <div className='text-container'>
          <h1 className='header-text'>new.</h1>
        </div>
        <div className='button-container'>
          <div className='line' />
          <span className='line-button' onClick={goToIdeaPage}>
            keep it simple
          </span>
        </div>
        <div className='moto-section'>
          <span className='moto-text'>Imagine</span>
          <span className='moto-text'>Sketch</span>
          <span className='moto-text'>Develop</span>
        </div>
      </div>
      <div className='ideas-container'>
        <span className='test' onClick={goToIdeaPage}>
          ideas
        </span>
      </div>
    </section>
  );
};

export default Landing;
