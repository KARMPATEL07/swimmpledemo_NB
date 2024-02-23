import React from 'react'
import './aboutCard.css'

const AboutCard = ({icon,title,description}) => {
  return (
    <div className="about-card">
      <span className="about-card-icon">
        <img src={icon} alt={title} className="about-fa-icon" />
      </span>
      <h1 className="about-card-title">{title}</h1>
      <p className="about-card-description">{description}</p>
    </div>
  );
}

// const AboutCard = () => {
//   return (
//     <div className="about-card">
//       <span className="about-card-icon">
//         <FontAwesomeIcon className="about-fa-icon" icon= {faGlassWaterDroplet} />
//       </span>
//       <h1 className="about-card-title">Vision</h1>
//       <p className="about-card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident cum iusto magnam repellat id optio pariatur quibusdam laudantium quos dolorum facere, vero error illo quaerat sunt tenetur maxime placeat.</p>
//     </div>
//   );
// };

export default AboutCard