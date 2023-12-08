// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createAppointment } from "../../services/apiCalls";
import "./InfoAppointments.css";
import ImageTattoo from "../../assets/ImagesBookNow/ImageTattoo.png";
import ImagePiercing from "../../assets/ImagesBookNow/ImagePiercing.png";
import ImageLaser from "../../assets/ImagesBookNow/ImageLaser.png";
// import Inputs from "../../common/Input/Input";

export const InfoAppointment = () => {
  // // eslint-disable-next-line no-unused-vars
  // const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   customerName: "",
  //   customerSurname: "",
  //   tattooArtistName: "",
  //   tattooArtistSurname: "",
  //   date: "",
  //   startTime: "",
  //   endTime: "",
  //   service: "",
  //   price: "",
  //   comments: "",
  // });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await createAppointment(formData);
  //     console.log("Cita creada con éxito:", response);
  //   } catch (error) {
  //     console.error("Error al crear la cita:", error);
  //   }
  // };

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

      {/* <div className="containerForm">
        <div className="lineFormBook"></div>
        <div className="inputsForm">
          <h2 className="tittleDate"> Book Your Date</h2>
          <div className="formDate">
            <span className="informationDate">
              <p>Please fill out the form if you would like to schedule an
              appointment with our staff. </p> 
              <p>Depending on the design, a
              consultation may be necessary. </p> 
              <p>To secure your appointment, a fee is required and can be paid either at the studio or through bank
              transfer.</p>
              <p>Details for the bank transfer are available upon
              request.</p> 
            </span>
            <form onSubmit={handleSubmit}>
      
            <div className="input-group">
          <Inputs
            text="Name"
            type="text"
            name="customerName"
            value={formData.customerName}
            handler={handleInputChange}
          />
          <Inputs
            text="Tattoo Artist"
            type="text"
            name="tattooArtistName"
            value={formData.tattooArtistName}
            handler={handleInputChange}
          />
        </div>

      
        <div className="input-group1">
          <Inputs
            text="Date"
            type="text"
            name="date"
            value={formData.date}
            handler={handleInputChange}
          />
          <Inputs
            text="Date Start"
            type="text"
            name="startTime"
            value={formData.startTime}
            handler={handleInputChange}
          />
          <Inputs
            text="Date End"
            type="text"
            name="endTime"
            value={formData.endTime}
            handler={handleInputChange}
          />
        </div>

        <div className="input-group3">
          <Inputs
            text="Type"
            type="text"
            name="service"
            value={formData.service}
            handler={handleInputChange}
          />
          <Inputs
            text="Comments"
            className="custom-input special"
            type="text"
            name="comments"
            value={formData.comments}
            handler={handleInputChange}
          />
        </div>
        <button className="buttonBookNow" type="submit">Submit</button>
            </form> */}
          {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default InfoAppointment;
