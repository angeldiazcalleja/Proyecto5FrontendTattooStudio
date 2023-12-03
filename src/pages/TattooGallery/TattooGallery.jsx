import  { useState } from 'react';
import Slider from 'react-slick';
import TattooCard from "../../common/TattooCard/TattooCard";
import { tattoosImages } from "../../common/Utils/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TattooGallery.css"; 

const TattooGallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1500,
  };

  return (
    <div className="tattoo-gallery">
      <div className="containerGallery">
        <div className="lineGallery"></div>
        <Slider {...settings}>
          {tattoosImages.map((tattoo, index) => (
            <TattooCard
              key={index}
              src={tattoo.src}
              name={tattoo.name}
              type={tattoo.type}
              expanded={index === expandedIndex}
              onClick={() => handleExpand(index)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TattooGallery;




