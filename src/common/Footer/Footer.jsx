import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../Input/Input";
import "./Footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Message sent");
    setTimeout(() => {
      setMessage("");
      navigate("/");
    }, 2000);
  };

  return (
    <footer className="custom-footer">
      <div className="lineContactTop"></div>
      <p className="titleFooter"> || CONTACT ||</p>
      <div className="lineContactBottom"></div>
      <div className="containerInformationFooter">
        <div className="footer-column1">
          <p className="Business">Business Hours</p>
          <ul>
            <li>Monday -10:00 - 20:00</li>
            <li>Tuesday: 10:00 - 20:00</li>
            <li>Wednesday: 10:00 - 20:00</li>
            <li>Thursday: 10:00 - 20:00</li>
            <li>Friday: 10:00 - 20:00</li>
            <li>Saturday: 10:00 - 17:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="footer-column2">
          <p className="detailsFooter">Details</p>
          <p>Telephone: 040 3657 9542</p>
          <p>Telephone: 02793 7830158</p>
          <p>Email Tattoos: info@inkstattoos.com</p>
          <p>Email Piercings: info@inkspiercings.com</p>
          <p>306/4-14 Buckingham St, Surry Hills NSW 2010, Sydney</p>
        </div>

        <div className="footer-column3">
          <p className="formFooter">Get In Touch</p>
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <Inputs text="First Name" type="text" name="firstName" />
              <Inputs text="Last Name" type="text" name="lastName" />
            </div>
            <div className="formRow">
              <Inputs text="Email" type="text" name="email" />
              <Inputs text="Phone" type="text" name="phone" />
            </div>
            <Inputs text="Type your message" type="text" name="comment" />
            <button className="submitFooter" type="submit">
              SUBMIT
            </button>
          </form>
          {message && <div className="successMessage">{message}</div>}
        </div>
      </div>

      <iframe
        title="Google Map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        className="iframeFooter"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1188381957036!2d151.2052353754386!3d-33.886593119980084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2053c67de5%3A0x2e9d56cb72aeafc6!2s305%2F14%20Buckingham%20St%2C%20Surry%20Hills%20NSW%202010%2C%20Australia!5e0!3m2!1sen!2ses!4v1701603814490!5m2!1sen!2ses" 
      ></iframe>

      <div className="lineContactBottom"></div>

      <div className="footerBottom">
        <p className="footerBottomText">
          <span style={{ display: "block" }}>
            The content on this website is owned by us and our licensors.
          </span>
          <span style={{ display: "block" }}>
            Do not copy any content without our consent.
          </span>
          <span>
            Created por Ángel Díaz. If you want to see more projects,
            <a
              href="https://github.com/angeldiazcalleja"
              target="_blank"
              style={{ color: "#efb810", fontSize: "15px" }}
              rel="noopener noreferrer"
            >
              Visit my GitHub!
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
