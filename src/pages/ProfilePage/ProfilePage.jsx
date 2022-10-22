import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './ProfilePage.css'
// import '../DeletePage/DeletePage'
import Navbar from "../../components/Navbar/Navbar";
import { Navigate } from "react-router-dom";
import { React } from "react";
import { useState } from "react";
import axios from "axios";

const ProfileSettings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: password,
    };
    console.log(userData);
    axios
      .post("http://localhost:5000/auth/signup", userData)
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
      <div className="home-container-profile">
        <div className="container-content-profile ">
          <p className="container-title-profile">Update Account details</p>
          <Form onSubmit={handleSubmit}>
           <div className="d-flex gap-5">
            <Form.Group className="mb-3 w-50 " controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="inputBox"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-50 " controlId="lastName">
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                className="inputBox"
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            </div>
            <Form.Group className="mb-3 " controlId="emailId">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="inputBox"
                type="email"
                placeholder="Enter email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </Form.Group>

            <Button className="button" type="submit">
              Update Profile
            </Button>

          </Form>
          <div className="delete-account">
          Delete Account
          </div>

          
        </div>
      </div>
    </div>
  );
};
export default ProfileSettings;
