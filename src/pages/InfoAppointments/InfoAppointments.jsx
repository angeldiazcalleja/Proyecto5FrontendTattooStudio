import "./InfoAppointments.css";
import ImageTattoo from "../../assets/ImagesBookNow/ImageTattoo.png";
import ImagePiercing from "../../assets/ImagesBookNow/ImagePiercing.png";
import ImageLaser from "../../assets/ImagesBookNow/ImageLaser.png";

export const InfoAppointment = () => {
  return (
    <div className="containerBookNow">
      <div className="containerTopBookNow">
        <div className="sliceContainerTop">
          <img src={ImageTattoo} alt="Tattoo" className="appointmentImage" />
          <div className="appointmentType">
            <p>Book</p>
            <p>Tattoo</p>
          </div>
          <p className="depositRange">Deposit $50 - $250</p>
        </div>
        <div className="sliceContainerTop">
          <img
            src={ImagePiercing}
            alt="Piercing"
            className="appointmentImage"
          />
          <div className="appointmentType">
            <p>Book</p>
            <p>Piercing</p>
          </div>
          <p className="depositRange">Deposit $10 - $25</p>
        </div>
        <div className="sliceContainerTop">
          <img src={ImageLaser} alt="Laser" className="appointmentImage" />
          <div className="appointmentType">
            <p>Book</p>
            <p>Laser</p>
          </div>
          <p className="depositRange">Deposit $40 - $75</p>
        </div>
      </div>
      <div className="lineFormBook"></div>
    </div>
  );
};

export default InfoAppointment;
