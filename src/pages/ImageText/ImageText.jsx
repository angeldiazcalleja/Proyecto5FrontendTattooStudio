
import './ImageText.css'; 
import PropTypes from 'prop-types';
import { useState } from 'react';


const ImageWithText = ({ imageSrc, altText, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`centerColumn galleryImageContainer ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={altText} className="galleryImage3" />
      {isHovered && <div className="galleryImageText">{text}</div>}
    </div>
  );
};

ImageWithText.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageWithText;

