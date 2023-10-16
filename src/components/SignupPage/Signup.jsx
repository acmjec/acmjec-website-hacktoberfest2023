import React from "react";
import "./Signup.css";
import google from "../../../public/images/google.png";
import github from "../../../public/images/github.png";
import apple from "../../../public/images/apple.png";
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {

  const { loginWithRedirect } = useAuth0();  // destructuring auth methods.

  return (
    
      <div className="main w-full bg-white">
        <div className="header">
          <button className="left-button"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 42 42" fill="none">
  <path d="M21 2L21.5316 2.0073C31.7741 2.28911 40 10.6898 40 21C40 31.469 31.488 40 21 40C10.531 40 2 31.469 2 21C2 10.512 10.531 2 21 2ZM24.762 13.4C24.192 12.83 23.299 12.83 22.748 13.4L16.117 19.993C15.851 20.259 15.699 20.62 15.699 21C15.699 21.38 15.851 21.741 16.117 22.007L22.748 28.6C23.014 28.885 23.375 29.018 23.736 29.018C24.116 29.018 24.477 28.885 24.762 28.6C25.313 28.03 25.313 27.137 24.743 26.586L19.138 21L24.743 15.414C25.313 14.863 25.313 13.951 24.762 13.4Z" fill="#110F2D"/>
  <path d="M21.0096 1.30007L21.0096 1.3H21C10.1449 1.3 1.3 10.1249 1.3 21C1.3 31.8556 10.1444 40.7 21 40.7C31.8751 40.7 40.7 31.8551 40.7 21C40.7 10.3096 32.1712 1.59977 21.5508 1.30757L21.5508 1.3075L21.5412 1.30737L21.0096 1.30007ZM23.2416 13.8964L23.2416 13.8965L23.2513 13.8865C23.5226 13.6059 23.9657 13.5936 24.267 13.895C24.5432 14.1712 24.5433 14.6335 24.2565 14.9107L24.2564 14.9106L24.2489 14.9182L18.6439 20.5042L18.1464 21L18.6439 21.4958L24.2489 27.0818L24.2488 27.0819L24.2565 27.0893C24.5374 27.3608 24.5505 27.8073 24.2628 28.1092C24.12 28.2499 23.9433 28.318 23.736 28.318C23.5459 28.318 23.3784 28.2495 23.2597 28.1224L23.2508 28.1128L23.2416 28.1036L16.612 21.512C16.6118 21.5119 16.6116 21.5117 16.6115 21.5115C16.4756 21.3753 16.399 21.192 16.399 21C16.399 20.808 16.4756 20.6247 16.6115 20.4885C16.6116 20.4883 16.6118 20.4881 16.612 20.488L23.2416 13.8964Z" stroke="white" stroke-opacity="0.24" stroke-width="1.4"/>
</svg>Back</button>

          <button className="right-button">Log in</button>
        </div>
        <div className="centered-div">
          <h2>
            <strong style={{"font-weight": "700"}}>Create Your Account</strong>
          </h2>
          <p className="caution">
            By creating an account you agree to the
            <strong style={{"font-weight": "700"}}> Terms & Conditions</strong> <br /> and have read and
            understood <strong style={{"font-weight": "700"}}>Privacy Policy</strong>
          </p>
          <div className="options">
            <button className="image-button" onClick={() => loginWithRedirect()}>
              <img src={google} alt="google" />
              <strong style={{"font-weight": "700"}}>
              Continue with Google </strong>
            </button>
            <button className="image-button">
              <img src={apple} alt="apple" />
              <strong style={{"font-weight": "700"}}>
              Continue with Apple</strong>
            </button>
            <button className="image-button"  onClick={() => loginWithRedirect()}>
              <img src={github} alt="github" />
              <strong style={{"font-weight": "700"}}>
              Continue with Github</strong>
            </button>
          </div>
          <p className="other">
            <strong style={{"font-weight": "700", "font-size": "14px"}}>OTHER OPTIONS</strong>
          </p>
        </div>
      </div>
    
  );
};

export default Signup;
