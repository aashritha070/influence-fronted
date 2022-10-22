// import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '@coreui/coreui/dist/css/coreui.min.css'
import "./App.css";
import Home from "./pages/HomePage/HomePage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import ViewPost from "./pages/viewPost/ViewPost.jsx";
import WritePost from "./pages/WritePage/WritePage.jsx";
import SignUp from "./pages/signupPage/SignupPage.jsx";
import ProfileSettings from "./pages/ProfilePage/ProfilePage.jsx";
import PasswordChange from "./pages/PasswordChange/PasswordChange";
import Tags from "./pages/TagsPage/TagsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteUser from "./pages/DeletePage/DeletePage";

function App() {
  // const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/tagselect" element={<Tags />}></Route>
        <Route exact path="/writePost" element={<WritePost />}></Route>
        <Route exact path="/profile" element={<ProfileSettings />}></Route>
        <Route exact path="/password" element={<PasswordChange />}></Route>
        <Route exact path="/deleteUser" element={<DeleteUser />}></Route>

        <Route path="/posts/:postId" element={<ViewPost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

//mongodb+srv://aashritha:<password>@influence-cluster.fjxcn84.mongodb.net/?retryWrites=true&w=majority
//work on sending username/id in backend.
