import PriceCard from "../../components/priceCard/PriceCard";
import "./demoPrice.css";
import Pricing from "./Pricing";

const demoPrice = () => {
  const false_icon =
    "https://image.similarpng.com/very-thumbnail/2020/11/Red-incorrect-icon-button-on-transparent-background-PNG-1.png";
  const true_icon =
    "https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png";
  return (
    <div className="pricing-container">
      <h1 className="price-heading">Start Your Lession</h1>
      <div className="plan-container">
        <PriceCard title="Live Daily Only" price="1999" tick1={true_icon} tick2={true_icon} tick3={true_icon} tick4={false_icon} tick5={false_icon} />
        <PriceCard title="Single Session" price="2999" tick1={true_icon} tick2={true_icon} tick3={true_icon} tick4={true_icon} tick5={true_icon} />
        <PriceCard title="Quaterly" price="3999" tick1={true_icon} tick2={true_icon} tick3={true_icon} tick4={true_icon} tick5={true_icon} />
        <PriceCard title="Yearly" price="4999" tick1={true_icon} tick2={true_icon} tick3={true_icon} tick4={true_icon} tick5={true_icon} />        
      </div>
    </div>
  );
};

export default demoPrice;
