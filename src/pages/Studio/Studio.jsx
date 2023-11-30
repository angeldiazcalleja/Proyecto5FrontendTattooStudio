import "./Studio.css";
import imgStudio from "../../assets/imgStudio.jpg";
import imgStudio2 from "../../assets/imgStudio2.jpg";
import gifStudio from "../../assets/gifStudio.gif";
import { Link } from "react-router-dom";

export const Studio = () => {
  return (
    <>
      <div className="containerStudio"> 
      <div className="lineStudioTop"></div>
      <div className="titleStudio">
        <p>THE STUDIO</p>
      </div>
      <div className="containerImgStudio">
        <img src={imgStudio} alt="Image 1" className="studioImage" />
        <img src={gifStudio} alt="Image 3" className="studioImage" />
        <img src={imgStudio2} alt="Image 2" className="studioImage" />
      </div>
      <div className="containerStreet">
        <div className="streetStudio">
          <p className="contentStreet"> 306/4-14 Buckingham St, Surry Hills NSW 2010, Sydney</p>
        </div>
        <div className="lineStudio"></div>
      </div>
      <Link to="/studioGallery">
        <button className="galleryButton">|| SEE MORE ||</button>
      </Link>
      </div>
    </>
  );
};
