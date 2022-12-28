import React, { useState, useEffect, useRef } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./Login.css";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  console.log(userDetails)
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setUserDetails(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  //using ref read the dat user entires
  const usernameRef = useRef();
  const passwordRef = useRef();

  //submit the data
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const userData = {
      username,
      password,
    };
console.log(userData)
    if (username === "" || password === "") {
      alert("Enter Username and Password Correctly");
    } else if (password.length < 5) {
      alert("Password must be above 8 char");
    } else {
      const data = userDetails.find(
        (person) =>
          person.username === userData.username &&
          person.password === userData.password
      );
      if (!data) {
        alert("invalid login");
      } else {
        alert("succeesfully login");
        props.modalClose(false);
        props.logOutShow(true);
        const name = userDetails.filter(
          (person) => person.username === userData.username
        );
        props.userDetailsGet(name);
      }
    }
  };

  const closeModal = () => {
    props.modalClose(false);
  };
  return (
    <div className="Login-container">
      <section>
        <div className="exitSection">
          <button onClick={closeModal} className="exitbutton">
            X
          </button>
        </div>
        <div className="Login-contentbx">
          <div>
            <form onSubmit={onSubmitHandler}>
              <div className="Login-input-icons">
                <i className="Login-icon">
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
                  className="Login-input-field"
                  type={"text"}
                  ref={usernameRef}
                  placeholder="Username"
                ></input>
              </div>
              <div className="Login-input-icons">
                <i className="Login-icon">
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
                  className="Login-input-field"
                  type={"password"}
                  placeholder="password"
                  ref={passwordRef}
                >
                 
                </input>
              </div>

              <div className="remember">
                <label>
                  {" "}
                  <input type={"checkbox"} placeholder="UserName"></input>{" "}
                  RememberMe
                </label>
                <button type="submit" className="Login-btn">LOGIN</button>
              </div>
            </form>
            <div className="remember">
              <p>
                <a href="/">Register now</a>
              </p>
              <p>
                <a className="forgotpassword" href="/">
                  Forgot password?
                </a>
              </p>
            </div>
            <p className="hr-lines"> OR </p>
            <div>
              <FacebookLoginButton
                className="social-btn"
                onClick={() => alert("Hello")}
              >
                <span className="social-text">LOGIN WITH FACEBOOK</span>
              </FacebookLoginButton>
              <TwitterLoginButton
                className="social-btn"
                onClick={() => alert("Hello")}
              >
                <span className="social-text">LOGIN WITH TWITTER</span>
              </TwitterLoginButton>
              <GoogleLoginButton
                className="social-btn"
                onClick={() => alert("Hello")}
              >
                <span className="social-text">LOGIN WITH GOOGLE</span>
              </GoogleLoginButton>
            </div>
          </div>
        </div>
        <div className="imgbx d-none d-md-block">
          <img
            className="login-image"
            src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};
export default Login;