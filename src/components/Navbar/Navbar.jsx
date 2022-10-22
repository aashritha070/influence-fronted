import "./Navbar.css";
import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

import Context from "../../context/Context";
import { Link } from "react-router-dom";
export default function Navbar() {
  const token = localStorage.getItem("Token");

  if (!token || token === "undefined") {
    return (window.location = "/login");
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <nav class="navbar navbar-dark  navbar-expand-md  justify-content-center">
      <a href="/" class="navbar-brand d-flex w-50 mr-auto">
        influence
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar3"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="navbar-nav w-100 justify-content-center">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          {token && token !== undefined ? (
            <>
              <li class="nav-item">
                <a class="nav-link" href="/writePost">
                  Write
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  My Blogs
                </a>
              </li>
            </>
          ) : (
            <li></li>
          )}
        </ul>
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          {token && token !== undefined ? (
           <><li className="nav-item"> 
           <div class="dropdown">
              <button class="dropbtn">
                <i class="fa fa-cog"></i>
              </button>
              <div class="dropdown-content">
                <a href="/profile">
                  {" "}
                  <span>
                    <i class="fa fa-user" /> My Profile{" "}
                  </span>
                </a>
                <a href="/password">
                  {" "}
                  <span>
                    {" "}
                    <i class="fa fa-key" /> Change Password
                  </span>
                </a>

              </div>
            </div></li>
            <li className="nav-item"><a class="nav-link" onClick={handleLogout}>
              {" "}
              <i class="fa fa-sign-out" /> Logout
            </a></li></>
          ) : (
            /* // <>
            //   <a href="/profile">
            //     <li class="nav-item">
            //       <button class="nav-button">Profile</button>
            //     </li>
            //   </a>
            //   <li class="nav-item">
            //     <button class="nav-button" href="#">
            //       logout
            //     </button>
            //   </li>
            // </> */
            <a href="/login">
              <li class="nav-item">
                <button class="nav-button">Login</button>
              </li>
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
}
