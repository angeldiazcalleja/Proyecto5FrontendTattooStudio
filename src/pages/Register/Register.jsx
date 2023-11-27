import Inputs from "../../common/Input/Input";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import { registerUser } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { Header } from "../../common/Header/Header";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Checkbox from "../../common/Checkbox/Checkbox";

export const RegisterUser = () => {
  const navigate = useNavigate();
  const [isOver18, setIsOver18] = useState(false);

  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setRegisterDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerHandler = () => {
    registerUser(registerDetails)
      .then((res) => {
        const decodedToken = jwtDecode(res.data.token);
        console.log(decodedToken);
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleGoToLogIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header showHeader={false} />

      <div className="containerSign">
        <BiX onClick={handleGoToHome} className="BiXIcon" />
        <div className="cardSign0">
          <div className="cardSign1">
            <div className="textSign">
              <p>SIGN UP</p>
            </div>
            <div className="changeLogIn">
              <p>
                Already a member?{" "}
                <span className="changeLogInText" onClick={handleGoToLogIn}>
                  Log In
                </span>
              </p>
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

             <Checkbox
              label="I am over 18 years old"
              checked={isOver18}
              onChange={setIsOver18}
            /> 
            <button className="buttonSignUp" onClick={registerHandler}>
              || SIGN UP ||
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
