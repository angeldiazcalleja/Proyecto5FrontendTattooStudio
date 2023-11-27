/* eslint-disable react/prop-types */
// /*eslint-disable react/prop-types */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faFacebook,
//   faInstagram,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import "./Header.css";
// export const Header = () => {
//   return (
//     <header className="custom-header">
//       <div className="custom-container">
//         <nav className="custom-navbar">
//           <div className="custom-text">
//             <a href="#login" className="custom-login">
//               Login 🔐

//             </a>
//             <a href="#home" className="custom-home">
//               || HOME ||
//             </a>
//             <a href="#studio" className="custom">
//               || STUDIO ||
//             </a>
//             <a href="#artists" className="custom">
//               || ARTISTS ||
//             </a>
//             <a href="#book-now" className="custom">
//               || BOOK NOW ||
//             </a>
//             {/* <FontAwesomeIcon icon={faRightToBracket} style={{color: "#efb810",fontSize: '35px'}} /> */}
//           </div>
//           <div className="custom-social">
//             <a>
//               <FontAwesomeIcon
//                 icon={faTwitter}
//                 style={{ color: "#efb810", fontSize: "35px" }}
//               />
//               <span className="d-lg-none ml-3">Twitter</span>
//             </a>
//             <a>
//               <FontAwesomeIcon
//                 icon={faInstagram}
//                 style={{ color: "#efb810", fontSize: "35px" }}
//               />
//               <span className="d-lg-none ml-3">Instagram</span>
//             </a>
//             <a>
//               <FontAwesomeIcon
//                 icon={faFacebook}
//                 style={{ color: "#efb810", fontSize: "35px" }}
//               />
//               <span className="d-lg-none ml-3">TikTok</span>
//             </a>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faYoutube}
//                 style={{ color: "#efb810", fontSize: "35px" }}
//               />
//               <span className="d-lg-none ml-3">Youtube</span>
//             </a>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

export const Header = ({ showHeader }) => {
  const headerClass = showHeader ? "custom-header" : "custom-header hidden";

  return (
    <header className={headerClass}>
      <div className="custom-container">
        <nav className="custom-navbar">
          <div className="custom-text">
            <a href="login" className="custom-login">
              Login 🔐
            </a>
            <a href="home" className="custom-home">
              || HOME ||
            </a>
            <a href="studio" className="custom">
              || STUDIO ||
            </a>
            <a href="artists" className="custom">
              || ARTISTS ||
            </a>
            <a href="book-now" className="custom">
              || BOOK NOW ||
            </a>
          </div>
          <div className="custom-social">
            <a>
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#efb810", fontSize: '35px' }} />
              <span className="d-lg-none ml-3">Twitter</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#efb810", fontSize: '35px' }} />
              <span className="d-lg-none ml-3">Instagram</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#efb810", fontSize: '35px' }} />
              <span className="d-lg-none ml-3">TikTok</span>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#efb810", fontSize: '35px' }} />
              <span className="d-lg-none ml-3">Youtube</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
