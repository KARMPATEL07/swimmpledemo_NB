import React from "react";
import SwimmerCard from "../../components/teamCard/TeamCard";

import "./team.css";

function Team() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Experts</span>
        </h3>

        {/* <p className="dt-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          quaerat quisquam eum ipsam minima. Voluptatem delectus minus tenetur
          fuga vel. At commodi voluptates officia fuga similique autem neque
          molestiae itaque!
        </p> */}
      </div>

      <div className="dt-cards-content">
        <SwimmerCard
          img="https://swimmpledemo.netlify.app/assets/sandeepkn.png"
          name="Sandeep K N"
          title="Design Director"
          description="Sandeep Is A Seasoned Entrepreneur With Expertise In Enterprise Architecture And Application InteĀration. He Co-Founded Ventures Like MonkeyBox, And SportingMindz, Showcasin A Versatile Career Spanning Innovation And Technology"
        />
        <SwimmerCard
          img="https://swimmpledemo.netlify.app/assets/aditya.png"
          name="Aditya Kariyappa"
          title="Design Director"
          description="Aditya Kariyappa, Sports Science Researcher At Innosportlab, Excelsin Biomechanical Analysis Of Swimming Techniques. His Precision And Technology-Driven Approach Enhance Swimmers' Performance At All Levels, Shaping The Sport's Future."
        />
        <SwimmerCard
          img="https://swimmpledemo.netlify.app/assets/raghavendra.png"
          name="Raghavendra Pai"
          title="Design Director"
          description="Raghavendra Is A Strategic Leader Overseeing Ārowth And Analytics For Global Company In Middle-East,With Expertise In Revenue Growth,Data Analysis, And Strategic Planning, Hensures Sustainable Expansion And Profitability While Driving The Program's Expansion Tonew Cities."
        />
        <SwimmerCard
          img="https://swimmpledemo.netlify.app/assets/jaymehta.png"
          name="Jay Mehta"
          title="Design Director"
          description="Jay Mehta, Based In Gujarat, Is An InteĀral Part Oÿ Shivranjani Construction Co. His Role Primarily Involves Securing Deals For The Company And Overseeing Projects Related To Electrical And Optical Fiber Cable Connectivity. His Company's Success."
        />
      </div>
    </div>
  );
}

export default Team;
