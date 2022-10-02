import gsap from "gsap";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
const Back = () => {
  useEffect(() => {
    gsap.from(".back-container", { duration: 1, opacity: 0 });
  }, []);
  return (
    <div className='back-container'>
      <Link className='link' to={-1}>
        Back
      </Link>
    </div>
  );
};

export default Back;
