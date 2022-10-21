import "./signUp.css";
import React from "react";
import "../../app.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // const [SignUpError, setSignUpError] = useState(false)

  const errorToast = () => {
    toast.error("user already exists!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const successToast = () => {
    toast.success("user added successfully!", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();

    await axios
      .post("https://influennce-backend.herokuapp.com/authorization/signUp", {
        username,
        email,
        password,
      })
      .then((res) => {
        successToast();
        return window.location.replace("/login");
      })
      .catch((error) => {
        errorToast();
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="body-wrapper">
        <Navbar />

        <div className="container">
          <div className="container-content">
            <span className="conteiner-title">Sign Up</span>
            <div className="container-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="group-label">Username</label>
                  <input
                    type="text"
                    className="group-input"
                    placeholder="enter your Username..."
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="group-label">Email</label>
                  <input
                    type="text"
                    className="group-input"
                    placeholder="enter your email Id..."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="group-label">password</label>
                  <input
                    type="password"
                    className="group-input"
                    placeholder="enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="button" type="submit">
                  Sign Up
                </button>
              </form>
              <div className="container-footer">
                Already have an account? <a href="/login"> Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
