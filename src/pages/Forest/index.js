import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Back } from "../../components";
import "./styles.scss";

gsap.registerPlugin(ScrollTrigger);
const Forest = () => {
  const ref = useRef(null);

  let getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.to(".forest-page", { duration: 1, opacity: 1 });

    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "25% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });
  }, []);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='forest-page'>
      <Back />
      <section>
        <div className='bg year' />
        <h1>365 days.</h1>
        <h2 onClick={handleClick}>Scroll down &#8595; </h2>
      </section>
      <section ref={ref}>
        <div className='bg winter' />
        <h1>winter</h1>
      </section>
      <section>
        <div className='bg spring' />
        <h1>spring</h1>
      </section>
      <section>
        <div className='bg summer' />
        <h1>summer</h1>
      </section>
      <section>
        <div className='bg autumun' />
        <h1>autumun</h1>
      </section>
    </div>
  );
};

export default Forest;
