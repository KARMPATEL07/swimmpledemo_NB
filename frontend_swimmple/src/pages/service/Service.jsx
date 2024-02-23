import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-main">
        <div className="service-title">What are we offering?</div>
        <div className="service-description">
          We provide cutting-edge solutions for optimizing swimming performance.
          With our Swim Analytics Systems (2D), athletes benefit from precise
          tracking and analysis of their movements, ensuring unparalleled
          insights and feedback. Our fully calibrated 8-camera system captures
          every detail, from start to stroke, guaranteeing comprehensive data
          for improvement. Additionally, our Swimming Performance Consulting
          service offers personalized sessions with sports scientists,
          empowering athletes with actionable plans for success. Through a
          combination of advanced technology and expert guidance, we strive to
          elevate swimming performance to new heights.
        </div>
      </div>
      <div className="service-offers">
        <div className="offer-one">
          <div className="offer-title">Swim Analytics System (2D)</div>
          <div className="offer-desc">
            <ul className="offer-list">
              <li className="offer-items">Fully celibrated 8 camera system</li>
              <li className="offer-items">
                Tracks minute movements oÿ swimmers
              </li>
              <li className="offer-items">
                Live delay feed for instant ÿ\feedback
              </li>
              <li className="offer-items">Measures start, turns and strokes</li>
              <li className="offer-items">Fully automated and non invasive</li>
              <li className="offer-items">AMC mandatory with system</li>
            </ul>
          </div>
        </div>
        <div className="offer-two">
          <div className="offer-title">Swimming Performance Consulting</div>
          <div className="offer-desc">
            <ul className="offer-list">
              <li className="offer-items">3 days / session / athlete</li>
              <li className="offer-items">
                Tracks minute movements oÿ swimmers
              </li>
              <li className="offer-items">1:1 session with sports scientist</li>
              <li className="offer-items">
                Guaranteed perÿormance improvement
              </li>
              <li className="offer-items">
                Comprehensive report across swim strokes
              </li>
              <li className="offer-items">
                AClear actionable plan ÿor improvement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
