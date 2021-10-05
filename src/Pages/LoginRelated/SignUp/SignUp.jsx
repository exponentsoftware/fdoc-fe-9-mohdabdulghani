import "./SignUp.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginFunction } from "../../../Redux/GeneralSlice";

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [history, isLoggedIn]);
  const handleChange = (e) => {
    let temp = { ...signupData };
    temp[e.target.name] = e.target.value;
    setSignupData(temp);
  };
  const validate = () => {
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isError = false;
    if (signupData?.name === "") {
      console.log("name can not be empty");
      isError = true;
    }
    if (signupData?.email === "") {
      console.log("email can not be empty");
      isError = true;
    } else if (!emailReg.test(signupData?.email)) {
      console.log("Email must be a valid email address.");
      isError = true;
    }
    if (signupData?.password === "") {
      console.log("password can not be empty");
      isError = true;
    } else if (signupData?.password.length < 6) {
      console.log("Password must greater than 6 charector");
      isError = true;
    }
    return isError;
  };
  const handleSignup = (e) => {
    e.preventDefault();
    let isError = validate();
    if (!isError) {
      dispatch(handleLoginFunction({ type: "signup", data: signupData }));
    }
  };

  return (
    <div className="signup">
      <div className="container right-panel-active mt-5" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <i className="fab fa-facebook-f mx-3 text-primary" />
              <i className="fab fa-google-plus-g mx-3 text-primary" />
              <i className="fab fa-linkedin-in mx-3 text-primary" />
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
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
            <button
              className="signup_button border-primary text-white bg-primary"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="text-black">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => history.push("/signin")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
