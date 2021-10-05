import "./SignIn.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginFunction } from "../../../Redux/GeneralSlice";

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
  const [signinData, setSignupData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [history, isLoggedIn]);
  const handleChange = (e) => {
    let temp = { ...signinData };
    temp[e.target.name] = e.target.value;
    setSignupData(temp);
  };
  const validate = () => {
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isError = false;
    if (signinData?.email === "") {
      console.log("email can not be empty");
      isError = true;
    } else if (!emailReg.test(signinData?.email)) {
      console.log("Email must be a valid email address.");
      isError = true;
    }
    if (signinData?.password === "") {
      console.log("password can not be empty");
      isError = true;
    } else if (signinData?.password.length < 6) {
      console.log("Password must greater than 6 charector");
      isError = true;
    }
    return isError;
  };
  const handleSignin = (e) => {
    e.preventDefault();
    let isError = validate();
    if (!isError) {
      dispatch(handleLoginFunction({ type: "signin", data: signinData }));
    }
  };
  return (
    <div className="signin">
      <div className="container mt-5" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="text-primary">Sign in</h1>
            <div>
              <i className="fab fa-facebook-f mx-3 text-primary" />
              <i className="fab fa-google-plus-g mx-3 text-primary" />
              <i className="fab fa-linkedin-in mx-3 text-primary" />
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <a href="# " className="text-white">
              Forgot your password?
            </a>
            <button
              className="signin_button border-primary text-white bg-primary"
              onClick={handleSignin}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="text-black">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
