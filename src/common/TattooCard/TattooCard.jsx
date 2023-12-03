// import PropTypes from 'prop-types';
// import "./TattooCard.css"

// const TattooCard = ({ src, name, alt, type }) => {
   
//   return (
    
//     <div className="gallery">
//     <div className="tattooCard">
//       <img className="tattooImg" name={name} src={src} alt={alt}  type={type} />
//       <div className="textContainer">
//           <p className="nameText">{name}</p>
//           <div className="lineTattooCard"></div>
//           <p className="altText"> {alt}</p>
//           <p className="typeText">{type}</p>
//         </div>
//     </div>
//     </div>

    
//   );
// };

// TattooCard.propTypes = {
//   src: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// export default TattooCard;




import { useState } from 'react';
import PropTypes from 'prop-types';
import "./TattooCard.css"

const TattooCard = ({ src, name, alt, type }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
    // Aquí puedes llamar a una función de padre que maneje el cambio de orden
  };

  return (
    <div className={`tattooCard ${isExpanded ? 'expanded' : ''}`} onClick={handleExpandClick}>
      <img className="tattooImg" name={name} src={src} alt={alt} type={type} />
      <div className="textContainer">
        <p className="nameText">{name}</p>
        <div className="lineTattooCard"></div>
        <p className="altText">{alt}</p>
        <p className="typeText">{type}</p>
      </div>
    </div>
  );
};

TattooCard.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TattooCard;






// import  { useState } from 'react';
// import PropTypes from 'prop-types';
// import "./TattooCard.css"

// const TattooCard = ({ src, name, alt, type }) => {
//   const [isExpanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!isExpanded);
//   };

//   return (
//     <div className={`gallery ${isExpanded ? 'expanded' : ''}`} onClick={handleExpandClick}>
//       <div className="tattooCard">
//         <img className="tattooImg" name={name} src={src} alt={alt} type={type} />
//         <div className="textContainer">
//           <p className="nameText">{name}</p>
//           <div className="lineTattooCard"></div>
//           <p className="altText">{alt}</p>
//           <p className="typeText">{type}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// TattooCard.propTypes = {
//   src: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// export default TattooCard;
