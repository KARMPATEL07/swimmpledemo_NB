import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1 className="title">Our Plans</h1>
      {/* <!-- Cards container --> */}
      <div className="cards">
        {/* <!-- Basic --> */}
        <div className="card card--basic">
          <h3 className="card__plan">Live Delay only</h3>
          <h2 className="card__price">$1999</h2>

          <p className="card__description"></p>
          <ul>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">1 Hour</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">Live Delay Feedback</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">
                Qualitative Feedback with sports analyst
              </span>
            </li>
          </ul>
          <button className="card__btn">Get Started</button>
        </div>

        {/* <!-- Multisite--> */}
        <div className="card card--multisite">
          <span className="card__badge">popular</span>
          <h3 className="card__plan">Multisite</h3>
          <h2 className="card__price">$6.99</h2>

          <p className="card__description"></p>
          <ul>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">1 Hour</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">Live Delay Feedback</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">
                Qualitative Feedback with sports analyst
              </span>
            </li>
          </ul>
          <button className="card__btn">Get Started</button>
        </div>
        {/* dagdsfdgfgdfgf */}
        <div className="card card--multisite">
          <span className="card__badge">popular</span>
          <h3 className="card__plan">Multisite</h3>
          <h2 className="card__price">$6.99</h2>

          <p className="card__description"></p>
          <ul>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">1 Hour</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">Live Delay Feedback</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">
                Qualitative Feedback with sports analyst
              </span>
            </li>
          </ul>
          <button className="card__btn">Get Started</button>
        </div>

        {/* <!-- Business --> */}
        <div className="card card--business">
          <h3 className="card__plan">Business</h3>
          <h2 className="card__price">$9.99</h2>
          <p className="card__description"></p>
          <ul>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">1 Hour</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">Live Delay Feedback</span>
            </li>
            <li className="card__feature feature">
              <i data-feather="check" className="feature__icon"></i>
              <span className="feature__text">
                Qualitative Feedback with sports analyst
              </span>
            </li>
          </ul>
          <button className="card__btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
