import { BiX } from "react-icons/bi";
import Inputs from "../../common/Input/Input";
import { useState } from "react";
import { login } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { userLogin } from "../userSlice";
import { Header } from "../../common/Header/Header";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const dispath = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = () => {
    login(loginDetails)
      .then((res) => {
        const token = jwtDecode(res.data.token);
        dispath(userLogin({ credentials: token }));
        console.log(token);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleGoToSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <Header showHeader={false} />
    
        <div className="containerLogin">
        <BiX onClick={handleGoToHome} className="BiXIcon" />
        <div className="cardLogin0">
        <div className="cardLogin1">
        <div className="textLogin">
        <p>Log In</p>
        </div>
        <div className="changeSignUp">
           <p>New to this site? <span className="changeSignText" onClick={handleGoToSignUp}>Sign Up</span></p>
        </div>
        <Inputs
          text="Email ID"
          type="email"
          name="email"
          className="inputLogin"
          handler={inputHandler}
        />
        <Inputs
          text="Password"
          type="password"
          name="password"
          className="inputLogin"
          handler={inputHandler}
        />
        <button className="buttonLogin" onClick={loginHandler}>
          || LOG IN ||
        </button>
        </div>
        </div>
      </div>
    </>
  );
};


