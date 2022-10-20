import './login.css';
import React from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import '../../app.css';
import { useState } from 'react';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Login() {

  const userValue = useRef();
  const password = useRef();
  const { user, dispatch, isRetreiving } = useContext(Context);
  const [loginError, setLoginError] = useState(false)

 

  const errorToast =()=>{
    toast.error("please enter valid credentials!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  }
  // const successToast =()=>{
  //   toast.success("user added successfully!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     progress: undefined,
  //   });

  // }
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN" });
    try {
      const res = await axios.post("http://localhost:5000/authorization/login", {
        username: userValue.current.value,
        password: password.current.value,
      });

      dispatch({ type: "LOGIN_DONE", payload: res.data });
    } catch (err) {
     errorToast()
    }
  };
  return (
    <div>
    <ToastContainer />
   
    <div className='body-wrapper'>
    <Navbar />
      <div className='container'>
        <div className='container-content'>
          <span className='container-title'>Login</span>
          <div>
            <form onSubmit={handleSubmit} >
              <div className='form-group'>
                <label className='group-label'>username</label>
                <input type="text"
                  className='group-input'
                  placeholder="enter your username..."
                  ref={userValue}
                />
              </div>

              <div className='form-group'>
                <label className='group-label'>password</label>
                <input type="password" className='group-input'
                  placeholder="enter your password..."
                  ref={password}
                />
              </div>
              <button className='button' type='submit' >login</button>
            </form>
            <div className="container-footer">
              New to Influence? <a href="/signup"> Sign Up</a>
            </div>
      
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
