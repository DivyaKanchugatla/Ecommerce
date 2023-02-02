import React, { useRef, useState } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./SignUp.css";

const SignUp = (props) => {
  const [errerMessage, SeterrerMessage] = useState("");
  const [error, setError] = useState(false);
  const userNameRef = useRef();
  const passWordRef = useRef();
  const conformPassRef = useRef();

  //login section show already user have a account
  const loginModalShow = () => {
    props.loginModalOpen(true);
    props.modalClose(false);
  };

  //signup handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //get user enter name and password
    const username = userNameRef.current.value;
    const password = passWordRef.current.value;
    const confrimpass = conformPassRef.current.value;
    //checking the conditions details
    if (username === "") {
      setError(true);
      SeterrerMessage("userName Required");
    } else if (password.length < 8) {
      setError(true);
      SeterrerMessage("Password must be 8 charcters");
    } else if (password !== confrimpass) {
      setError(true);
      SeterrerMessage("Password must be same as above password");
    } else {
      setError(false);
      //POST request using axios inside useEffect React hook
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          /* other user data */
        }),
      })
        .then((res) => res.json())
        .then(console.log);
      alert("Succssfully register");

      props.modalClose(false);
      props.loginModalOpen(true);

      // fetch("https://dummyjson.com/users/")
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
    }
  };
  const closeModal = () => {
    props.modalClose(false);
  };
  return (
    <div className="Modal_container_signup signin-container">
     <section>
      <div className="exitSection">
          <button onClick={closeModal} className="exitbutton">
            X
          </button>
        </div>
        <div className="signin-contentbx order-0 w-sm-100 flex-fill">
          <div className="sign-form">
            <form onSubmit={onSubmitHandler}>
              <div className="signin-input-icons">
                <i className="signin-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </i>
                <input
                  className="signin-input-field"
                  type={"text"}
                  ref={userNameRef}
                  placeholder="Username"
                ></input>
              </div>
              <div className="signin-input-icons">
                <i className="signin-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </i>
                <input
                  className="signin-input-field"
                  type={"password"}
                  placeholder="password"
                  ref={passWordRef}
                >  
                </input>
              </div>
              <div className="signin-input-icons">
                <i className="signin-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </i>
                <input
                  className="signin-input-field"
                  type={"password"}
                  placeholder="Confirm password"
                  ref={conformPassRef}
                >  
                </input>
              </div>
              <div>
              {error ? (
                <p
                  style={{ color: "red", fontSize: "20px" }}
                >{`*${errerMessage}`}</p>
              ) : (
                ""
              )}
            </div>
              <div className="signin-remember">
                <label>
                  {" "}
                  <input type={"checkbox"} placeholder="UserName"></input>{" "}
                  RememberMe
                </label>
                <button type="submit" className="signin-btn">SIGNUP</button>
              </div>
            </form>
            <div className="modal-footer d-flex justify-content-center">
              <div className="signup-section">
                Already a member ?{" "}
                <button onClick={loginModalShow} className="login_button">
                  Login
                </button>
              </div>
            </div>
            <p className="hr-lines"> OR </p>
            <div>
              <FacebookLoginButton
                className="social-btn"
                onClick={() => alert("Hello")}
              >
                <span className="social-text">SIGNIN WITH FACEBOOK</span>
              </FacebookLoginButton>
              <TwitterLoginButton
                className="social-btn"
                onClick={() => alert("Hello")}
              >
                <span className="social-text">SIGNIN WITH TWITTER</span>
              </TwitterLoginButton>
              <GoogleLoginButton
                className="social-btn"
                onClick={() => alert("Hello")}
              >
                <span className="social-text">SIGNIN WITH GOOGLE</span>
              </GoogleLoginButton>
            </div>
          </div>
        </div>
        <div className="imgbx d-none d-md-block">
          <img
            className="signin-image"
            src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default SignUp;