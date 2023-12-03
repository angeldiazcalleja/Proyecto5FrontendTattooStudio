import "./StudioGallery.css"; 
import interiorStudio0 from "../../assets/interiorStudio0.jpg";
import interiorStudio1 from "../../assets/interiorStudio1.jpg";
import interiorStudio2 from "../../assets/interiorStudio2.jpg";
import interiorStudio3 from "../../assets/interiorStudio3.jpg";
import interiorStudio4 from "../../assets/interiorStudio4.jpg";
import interiorStudio5 from "../../assets/interiorStudio5.jpg";
import interiorStudio6 from "../../assets/interiorStudio6.png";
import interiorStudio from "../../assets/interiorStudio.jpg";
import ImageWithText from '../ImageText/ImageText'



export const StudioGallery = () => {

  return (
    <div className="generalContainer">
    <div className="galleryContainer">
    <div className="lineStudioGallery"></div>
      <div className="topRow">
        <img src={interiorStudio6} alt="Image 1" className="galleryImage1" />
        <img src={interiorStudio} alt="Image 2" className="galleryImage1" />
        <img src={interiorStudio3} alt="Image 3" className="galleryImage1" />
      </div>

      <div className="middleRow">
        <div className="leftColumn">
          <img src={interiorStudio1} alt="Image 4" className="galleryImage2" />
          <img src={interiorStudio2} alt="Image 5" className="galleryImage2" />
        </div>

        <div className="centerColumn">
            <ImageWithText
              imageSrc={interiorStudio0}
              altText="Image 6"
              text="The Inks London Tattoo Studio was established in 2012 to create a fantastic world through ink. Since then, the best professionals have dedicated themselves to achieving true works of art, carefully attending to every small detail. 
              If you can dream it, we can tattoo it."
            />
          </div>

        <div className="rightColumn">
          <img src={interiorStudio4} alt="Image 1" className="galleryImage4" />
          <img src={interiorStudio5} alt="Image 2" className="galleryImage4" />
        </div>
      </div>
    </div>
    </div>
  );
};

