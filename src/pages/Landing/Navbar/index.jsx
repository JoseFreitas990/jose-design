import gsap from "gsap";
import React, { useEffect } from "react";
import "./styles.scss";
const Navbar = ({ onClick }) => {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(".navbar-text", { duration: 1, y: 0, delay: 1.4 });
  }, []);

  return (
    <section className='navbar-section'>
      <a
        className='navbar-text'
        href='https://www.linkedin.com/in/jos%C3%A9-bernardo-freitas-8a8b761b7/'
        target='_blank'
      >
        me.
      </a>
      <a className='navbar-text' onClick={onClick}>
        ideas.
      </a>
      <a className='navbar-text'>contact.</a>
    </section>
  );
};

export default Navbar;
