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
import { validate } from "../../services/useFul";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: ""
  })

  const inputHandler = (e) => {
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = () => {
    login(loginDetails)
      .then((res) => {
        const token = jwtDecode(res.data.token);
        dispath(userLogin({ credentials: token }));
        setMsg(`Welcome! Good to see you again ${res.data.name}`);
        console.log(token);
        setTimeout(() => {
          navigate("/");
        }, 2000);
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

  const checkError = (e) => {

    let error = "";

    error = validate(e.target.name, e.target.value)

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + 'Error']: error
    }));

  }

  return (
    <>
      <Header showHeader={false} />

      <div className="containerLogin">
        {msg !== "" ? (
          <div className="containerMsg">
            <div className="msgDesign">{msg}</div>
          </div>
        ) : (
          <>
            <BiX onClick={handleGoToHome} className="BiXIcon" />
            <div className="cardLogin0">
              <div className="cardLogin1">
                <div className="textLogin">
                  <p>Log In</p>
                </div>
                <div className="changeSignUp">
                  <p>
                    New to this site?{" "}
                    <span className="changeSignText" onClick={handleGoToSignUp}>
                      Sign Up
                    </span>
                  </p>
                </div>
                <Inputs
                  text={"Email ID"}
                  type={"email"}
                  name={"email"}
                  className={`inputDesign ${userError.emailError !== '' ? 'inputDesignError' : ''}`}
                  handler={inputHandler}
                  functionError={checkError}
                />
                <div className="errorRedMsg0">{userError.emailError}</div>
                <Inputs
                  text={"Password"}
                  type={"password"}
                  name={"password"}
                  className={`inputDesign ${userError.passwordError !== '' ? 'inputDesignError' : ''}`}
                  handler={inputHandler}
                  functionError={checkError}
                />
                <div className="errorRedMsg1">{userError.passwordError}</div>
                <button className="buttonLogin" onClick={loginHandler}>
                  || LOG IN ||
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
