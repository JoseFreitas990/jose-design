import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, youtEffect, useRef } from "react";
import "./styles.scss";
gsap.registerPlugin(ScrollTrigger);

const Matryoshka = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <section id='container' className='matryoshka-page'>
      <div className='square' />
      <div className='square' />
      <div className='square' />
      <div className='square' />
      <div className='square' />
    </section>
  );
};

export default Matryoshka;
