import Inputs from "../Input/Input";
import "./Footer.css";

export const Footer = () => {
  // const footerClass = showFooter ? "custom-footer" : "custom hidden";

  return (
    <footer className="custom-footer">
      <p className="titleFooter"> || CONTACT ||</p>
      <div className="lineContact"></div>
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
          <p>Telephone: 020 7385 0958</p>
          <p>Telephone: 07448 361966</p>
          <p>Email Tattoos: info@inkdlondon.com</p>
          <p>Email Piercings: info@piercdlondon.com</p>
          <p className="streetFooter">
            Address: Inkd London Tattoos, Piercings & Laser Tattoo Removal
          </p>
          <p>313 North End Rd, London, SW6 1NN</p>
        </div>

        <div className="footer-column3">
          <p className="formFooter">Get In Touch</p>
          
          <div>
            <Inputs text="First Name" type="text" name="firstName" />
            <Inputs text="Last Name" type="text" name="lastName" />
          </div>
          <div> 
            <Inputs text="Email" type="text" name="email" />
            <Inputs text="Phone" type="text" name="phone" />
          </div>
          <Inputs  text="Type your message" type="text" name="comment"/>
          <button className="submitFooter">SUBMIT</button>
          </div>
        
      </div>

      <div className="lineContact"></div>

      <iframe
        title="Google Map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        className="iframeFooter"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1188381957036!2d151.20523537543858!3d-33.886593119980084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2053c67de5%3A0x2e9d56cb72aeafc6!2s305%2F14%20Buckingham%20St%2C%20Surry%20Hills%20NSW%202010%2C%20Australia!5e0!3m2!1ses!2ses!4v1701303552041!5m2!1ses!2ses">
          
        </iframe>

      <div className="footer-bottom">
        <p>
          © 2021. The content on this website is owned by us and our licensors.
          Do not copy any content (including images) without our consent
        </p>
      </div>
    </footer>
  );
};


