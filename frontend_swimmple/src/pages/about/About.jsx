import React from 'react'
import AboutCard from '../../components/aboutbox/AboutCard'
import IconImage from "../../assets/aboutPage/icon-img.jpg"
import vision from "../../assets/aboutPage/vision.png";
import mission from "../../assets/aboutPage/mission.png";
import "./about.css";

const About = () => {
  return (
    <div className="about-section" id="abouts">
      <div className="about-title-content">
        <h1 className="about-title">Who Are We?</h1>
        <p className="about-description">
          At Swimmple, We are a team of passionate engineers deeply immersed in
          the world of sports. Our expertise lies in swimming, and we are driven
          by a shared ambition to establish India's inaugural swim science lab.
          With our dedication and know-how, we aim to pioneer groundbreaking
          research and advancements in aquatic performance, setting new
          standards in the industry.
        </p>
      </div>
      <div className="about-cards-content">
        <img
          src={IconImage}
          alt="we"
          className='about-img-main'
        />
        <AboutCard
          icon={vision}
          title="Vision"
          description="At Swimmple, our vision is to redefine the swimming experience, fostering a community where individuals of all backgrounds and abilities embrace the transformative power of water. We strive to create a world where swimming is not only accessible but celebrated as a cornerstone of well-being and vitality."
        />
        <AboutCard
          icon={mission}
          title="Mission"
          description="Our mission at Swimmple is to provide comprehensive swimming solutions that empower individuals to unlock their aquatic potential. Through personalized coaching, innovative programs, and state-of-the-art facilities, we aim to inspire a lifelong love for swimming and cultivate a culture of inclusivity, health, and personal growth."
        />
      </div>
    </div>
  );
}

export default About