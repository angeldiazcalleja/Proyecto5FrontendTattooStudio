import "./Home.css";
import glowImage from "../../assets/glowHomeFinal1.png";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";



export const Home = () => {
  const rdxToken = useSelector(userData);
  console.log(rdxToken);

  return (
    <>
    <div className="home-container">
      <div className="containerLogo">
        <div className="blackBackground">
          <p className="textSales">SALES</p>
        </div>
        <div className="containerImg">
          <img
            src={glowImage}
            alt="Logo"
            className="centeredImage"
          />
        </div>
      </div>
      </div>
    </>
  );
};
