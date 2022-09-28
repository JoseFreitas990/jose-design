import gsap from "gsap";
import React, { useEffect } from "react";
import "./styles.scss";
const Navbar = () => {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(".navbar-text", { duration: 1, y: 0, delay: 1.4 });
  }, []);

  return (
    <section className='navbar-section'>
      <span className='navbar-text'>me.</span>
      <span className='navbar-text'>ideas.</span>
      <span className='navbar-text'>contact.</span>
    </section>
  );
};

export default Navbar;
