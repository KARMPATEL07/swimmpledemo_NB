import React from 'react'

const PriceCard = ({title,price,tick1,tick2,tick3,tick4,tick5}) => {
  return (
    <div className="price-card">
      <div className="plan-heading">
        <div className="plan-title">{title}</div>
        <div className="plan-price">₹{price}</div>
      </div>
      <div className="plan-features">
        <ul className="plan-list">
          <li className="plan-item">
            <img src={tick1} alt="true" className="icon-plan" />
            <span className="plan">1 Hour</span>
          </li>
          <li className="plan-item">
            <img src={tick2} alt="true" className="icon-plan" />
            <span className="plan">Live Delay feedback</span>
          </li>
          <li className="plan-item">
            <img src={tick3} alt="true" className="icon-plan" />
            <span className="plan">
              Qualitative Feedback with sports analyst
            </span>
          </li>
          <li className="plan-item">
            <img src={tick4} alt="true" className="icon-plan" />
            <span className="plan">1:1 sports scientist session</span>
          </li>
          <li className="plan-item">
            <img src={tick5} alt="true" className="icon-plan" />
            <span className="plan">Detailed report</span>
          </li>
        </ul>
      </div>

      <button className="plan-btn">Choose Plan</button>
    </div>
  );
}

export default PriceCard