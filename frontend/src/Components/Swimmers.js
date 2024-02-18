import React from "react";
import SwimmerCard from "./SwimmerCard";
import profile1 from "../Assets/profile-1.jpg";
import profile2 from "../Assets/profile-2.webp";
import profile3 from "../Assets/profile-3.jpg";
import profile4 from "../Assets/profile-4.jpg";
import "../Styles/Swimmers.css";

function Swimmers() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Experts</span>
        </h3>

        <p className="dt-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quaerat quisquam eum ipsam minima. Voluptatem delectus minus tenetur fuga vel. At commodi voluptates officia fuga similique autem neque molestiae itaque!
        </p>
      </div>

      <div className="dt-cards-content">
        <SwimmerCard
          img={profile1}
          name="Kathryn Murphy"
          title="Swimmer"
          stars="4.9"
          reviews="1800"
        />
        <SwimmerCard
          img={profile2}
          name="Jacob Jones"
          title="Expert Swimmer"
          stars="4.8"
          reviews="700"
        />
        <SwimmerCard
          img={profile3}
          name="Jenny Wilson"
          title="Expert Diver"
          stars="4.7"
          reviews="450"
        />
        <SwimmerCard
          img={profile4}
          name="Albert Flores"
          title="Profeesinal Swmmiers"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Swimmers;
