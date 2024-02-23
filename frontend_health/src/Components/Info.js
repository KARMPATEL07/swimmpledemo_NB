import React from "react";
import InformationCard from "./InformationCard";
import { faHouseFloodWater, faGlassWaterDroplet, faWater } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What are we offering?</span>
        </h3>
        <p className="info-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse accusantium, dolor ex aperiam ducimus impedit expedita nesciunt porro, accusamus sit modi blanditiis tempora maiores suscipit commodi amet explicabo dolorum sunt.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Title 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod!"
          icon={faHouseFloodWater}
        />

        <InformationCard
          title="Title 2"
          description="Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod!"
          icon={faGlassWaterDroplet}
        />

        <InformationCard
          title="Title 3"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod!"
          icon={faWater}
        />
      </div>
    </div>
  );
}

export default Info;
