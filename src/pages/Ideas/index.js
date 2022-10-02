import gsap from "gsap";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { lake, sky } from "../../assets/assets";
import Back from "../../components/Back";
import "./styles.scss";

const Ideas = () => {
  const navigate = useNavigate();
  var tl = gsap.timeline();

  const text = [
    { title: "Forest", to: "/forest" },
    { title: "Parallax", to: "/parallax" },
    { title: "People", to: "/people" },
    { title: "Console", to: "/console" },
    { title: "Random", to: "/random" },
  ];

  useEffect(() => {
    gsap.to(".bg", { duration: 0.5, opacity: 1 });

    gsap.to(".lake", { duration: 0.5, scale: 1 });
    gsap.to(".sky", { duration: 0.5, scale: 1 });

    tl.to(".ideas-container", {
      duration: 1,
      height: 3,
      width: "80%",
      opacity: 1,
    })
      .to(".ideas-container", { duration: 1, height: "80%", repeat: false })
      .to(".item", { duration: 1, opacity: 1, stagger: 0.1 });
  }, []);

  const handleNavigate = (to) => {
    gsap.to(".ideas-section", {
      duration: 1,
      opacity: 0,
      onComplete: () => navigate(`${to}`),
    });
  };

  return (
    <div className='ideas-section'>
      <Back />
      <img className='bg sky' src={sky} alt='lake' />{" "}
      <img className='bg lake' src={lake} alt='sky' />
      <div className='ideas-background'>
        <span>ideas</span>
      </div>
      <div className='center'>
        <div className='ideas-container'>
          <div className='ideas-container-padding'>
            {text.map((item) => {
              return (
                <React.Fragment key={item.title}>
                  <span
                    onClick={() => handleNavigate(item.to)}
                    className='item'
                  >
                    - {item.title}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
