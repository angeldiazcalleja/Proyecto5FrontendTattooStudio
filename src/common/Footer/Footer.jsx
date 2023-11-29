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
          <p>Telephone:  020 7385 0958</p>
          <p>Telephone:  07448 361966</p>
          <p>Email Tattoos: info@inkdlondon.com</p>
          <p>Email Piercings: info@piercdlondon.com</p>
          <p className="streetFooter">Address: Inkd London Tattoos, Piercings & Laser Tattoo Removal</p>
          <p>313 North End Rd, London, SW6 1NN</p>
        </div>

        <div className="footer-column3">
          <p className="formFooter">Get In Touch</p>
          <div>
            <input className="inputFooter" type="text" placeholder="First Name" />
            <input className="inputFooter" type="text" placeholder="Last Name" />
          </div>
          <div>
            <input className="inputFooter"type="text" placeholder="Email" />
            <input className="inputFooter"type="text" placeholder="Phone" />
          </div>
          <textarea className="commentFooter"placeholder="Type your message here..."></textarea>
          <button>SUBMIT</button>
        </div>
      </div>

      {/* Agrega el mapa iframe aquí */}

      <div className="footer-bottom">
        <p>
          © 2021. The content on this website is owned by us and our licensors.
          Do not copy any content (including images) without our consent
        </p>
      </div>
    </footer>
  );
};


