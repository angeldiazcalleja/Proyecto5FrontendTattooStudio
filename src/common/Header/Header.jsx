/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, userData } from "../../pages/userSlice";
import "./Header.css";
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Header = ({ showHeader }) => {
  const headerClass = showHeader ? "custom-header" : "custom-header hidden";

  const homeRef = useRef(null);
  const studioRef = useRef(null);
  const artistsRef = useRef(null);

  const navigate = useNavigate();
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const user = useSelector(userData);
  const hasToken = user.token;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const handleBookNow = () => {
    if (!hasToken) {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false);
      }, 2000);
    } 
    else {
     navigate('/booknow');
    }
  };
  return (
    <header className={headerClass}>
      <div className="custom-container">
        <nav className="custom-navbar">
          <div className="custom-text" style={{ scrollBehavior: "smooth" }}>
            {hasToken ? (
              <div className="custom-user">
                <span
                  className="custom-username"
                  onClick={() => console.log("Username clicked!")}
                >
                  {user.credentials.name}
                </span>
                <div className="custom-dropdown">
                  <a href="profile" className="custom-dropdown-item">
                    Profile 🚀
                  </a>
                  {user.credentials.role === "admin" && (
                    <a href="users" className="custom-dropdown-item">
                      Users 🌟
                    </a>
                  )}
                  <div className="buttonLogout" onClick={handleLogout}>
                    Logout 🔓
                  </div>
                </div>
              </div>
            ) : (
              <a href="login" className="custom-login">
                Login 🔐
              </a>
            )}
            <a
              href="home"
              className="custom-home"
              onClick={() => scrollToRef(homeRef)}
            >
              || HOME ||
            </a>
            <a
              href="#studio"
              className="custom"
              onClick={() => scrollToRef(studioRef)}
            >
              || STUDIO ||
            </a>
            <a
              href="#artists"
              className="custom"
              onClick={() => scrollToRef(artistsRef)}
            >
              || ARTISTS ||
            </a>
            <div className="custom" onClick={handleBookNow}>
              || BOOK NOW ||
            </div>
            <a href="info" className="custom">
              || INFO ||
            </a>
          </div>

          <div className="customSocial">
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#efb810", fontSize: "32px" }}
              />
              <span className="d-lg-none ml-3">Twitter</span>
            </a>
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#efb810", fontSize: "32px" }}
              />
              <span className="d-lg-none ml-3">Instagram</span>
            </a>
            <a>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#efb810", fontSize: "32px" }}
              />
              <span className="d-lg-none ml-3">Facebook</span>
            </a>
            <a>
              <FontAwesomeIcon
                icon={faYoutube}
                style={{
                  color: "#efb810",
                  fontSize: "35px",
                  marginBottom: "0.4em",
                }}
              />
              <span className="d-lg-none ml-3 youtubeIcon"></span>
            </a>
          </div>
        </nav>
      </div>

      {showLoginMessage && (
        <div className="login-message-container">
        <div className="login-message">
        To access, you must log in.
        </div>
      </div>
      )}
    </header>
  );
};
