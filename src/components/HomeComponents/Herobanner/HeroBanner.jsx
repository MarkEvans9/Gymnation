import React from "react";
import "./HeroBanner.css";
import Banner from "../../../assets/images/Banner4.jpg";
const HeroBanner = () => {
  return (
    <div className="BannerCon">
      <h4>Fitness Club</h4>

      <h2>
        Sweat, Smile <br /> And Repeat
      </h2>
      <p>Chechout our most effective exercises</p>
      <button
        onClick={() =>
          window.scrollTo({
            top: 800,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        Explore Exercises
      </button>
      <h1>Exercises</h1>
      <img src={Banner} alt="Banner" />
    </div>
  );
};

export default HeroBanner;
