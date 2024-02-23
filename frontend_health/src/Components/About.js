import React from "react";
import Swimmer from "../Assets/whyus.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Swimmer} alt="Swimmer Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta labore cumque ratione fugit aut nam vitae voluptatem ullam, asperiores, voluptate neque nemo voluptatum doloremque magni vero minima odio sapiente dolorem!
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Lorem` ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!"
        />

        <SolutionStep
          title="Make a Schedule"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!"
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!"
        />
      </div>
    </div>
  );
}

export default About;
