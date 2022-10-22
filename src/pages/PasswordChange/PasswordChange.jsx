import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import "./PasswordChange.css";
import Navbar from "../../components/Navbar/Navbar";
import { Navigate } from "react-router-dom";
import { React } from "react";
import { useState } from "react";
import axios from "axios";

const PasswordChange = () => {
  const [password, setPassword] = useState("");
  //   const [newPassword, setNewPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    const userData = {
      password: password,
    };
    console.log(userData);
    axios
      .put("http://localhost:5000/auth/signup", userData)
      .then((response) => {
        console.log(response);
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />
      <div className="home-container-password">
        <div className="container-content-password ">
          <p className="container-title-password">Change Password</p>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex-column">
              <form className="mb-3 " controlId="firstName">
                <Form.Label>Enter new password</Form.Label>
                <Form.Control
                  className="inputBox"
                  type="text"
                  placeholder="Enter first name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>

              <form className="mb-3  " controlId="lastName">
                <Form.Label>Confirm new password</Form.Label>
                <Form.Control
                  className="inputBox"
                  type="text"
                  placeholder="Enter last name"
                  //   value={lastName}
                  //   onChange={(e) => setLastName(e.target.value)}
                />
              </form>
            </div>

            <Button className="button-password" type="submit">
              Save Changes
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default PasswordChange;
