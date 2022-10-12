import React, { useLayoutEffect, useRef } from "react";
import "./styles.scss";
import { keanu } from "../../assets/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const People = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const secondImgRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let img = imageRef.current;

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth - 150} `,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(
        img,
        {
          opacity: 0,
          width: "25%",
          height: "25%",
        },
        "key1"
      )
      .from(
        ".secondary-img",
        {
          opacity: 0.5,
          scale: 0.5,
        },
        "key1"
      );
  }, []);

  return (
    <div className='people-section' ref={sectionRef}>
      <div className='main-img' ref={imageRef}>
        <img alt='keanu' src={keanu} />
      </div>
      <div className='secondary-img first' ref={secondImgRef}>
        <img alt='keanu' src={keanu} />
      </div>
      <div className='secondary-img second' ref={secondImgRef}>
        <img alt='keanu' src={keanu} />
      </div>{" "}
      <div className='secondary-img third' ref={secondImgRef}>
        <img alt='keanu' src={keanu} />
      </div>{" "}
      <div className='secondary-img fourth' ref={secondImgRef}>
        <img alt='keanu' src={keanu} />
      </div>{" "}
      <div className='secondary-img fifth' ref={secondImgRef}>
        <img alt='keanu' src={keanu} />
      </div>{" "}
      <div className='secondary-img sixth' ref={secondImgRef}>
        <img alt='keanu' src={keanu} />
      </div>
    </div>
  );
};

export default People;
