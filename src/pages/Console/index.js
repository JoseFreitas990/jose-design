import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, youtEffect, useRef } from "react";
import "./styles.scss";
import { Back } from "../../components";
const Console = () => {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.to(".container", {
  //     xPercent: -100,
  //     x: window.document.innerWidth,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".container",
  //       start: "top top",
  //       end: () => window.document.innerWidth,
  //       scrub: true,
  //       anticipatePin: 1,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    gsap.from(".scroll-animation", { opacity: 0, duration: 1.5 });

    gsap.utils.toArray(".section").forEach((container, i) => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: 1,
      });
      gsap.from(container.children, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "top top",
          toggleActions: "play none reverse reset",
        },
      });
    });
  }, []);

  return (
    <div className='scroll-animation'>
      <Back />
      <div className='container'>
        <div className='section first'>
          <h1>Consoles</h1>
        </div>

        <div className='section second'>
          <h1>Playstation</h1>
        </div>
        <div className='section third'>
          <h1>XBOX</h1>
        </div>
        <div className='section fourth'>
          <h1>Nintendo Switch</h1>
        </div>
        <div className='section fifth'>
          <h1>PC</h1>
        </div>
      </div>
    </div>
  );
};

export default Console;
