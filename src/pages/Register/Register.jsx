import  { useState } from "react";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { registerUser } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { Header } from "../../common/Header/Header";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../userSlice";
import Inputs from "../../common/Input/Input";
import Checkbox from "../../common/Checkbox/Checkbox";
import "./Register.css";

export const RegisterUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOver18, setIsOver18] = useState(false);
  const [msg, setMsg] = useState("");

  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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
        const token = res.data.token ? jwtDecode(res.data.token.toString()) : null;
        dispatch(userLogin({ credentials: {}, token })); 
        setMsg(`Account created successfully! Please log in.`);
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
        {msg !== "" ? (
          <div className="containerMsg">
            <div className="msgDesign">{msg}</div>
          </div>
        ) : (
          <>
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
              text="Name"
              type="name"
              name="name"
              className="inputLogin"
              handler={inputHandler}
            />
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

            <Inputs
              text="Phone"
              type="Prone"
              name="phone"
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
        </>
        )}
      </div>
    </>
  );
};
