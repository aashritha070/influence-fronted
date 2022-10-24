
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./main.css";

import Home from "./pages/HomePage/HomePage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import ViewPost from "./pages/viewPost/ViewPost.jsx";
import WritePost from "./pages/WritePage/WritePage.jsx";
import SignUp from "./pages/signupPage/SignupPage.jsx";
import BlogList from "./pages/BlogList/BlogList";
import ProfileSettings from "./pages/ProfilePage/ProfilePage.jsx";
import PasswordChange from "./pages/PasswordChange/PasswordChange";
import Tags from "./pages/TagsPage/TagsPage";


function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/tagselect" element={<Tags />}></Route>
        <Route exact path="/writePost" element={<WritePost />}></Route>
        <Route exact path="/profile" element={<ProfileSettings />}></Route>
        <Route exact path="/password" element={<PasswordChange />}></Route>
        <Route exact path="/view" element={<ViewPost />}></Route>
        <Route exact path="/blogsview" element={<BlogList />}></Route>
        <Route path="/posts/:postId" element={<ViewPost />}></Route>
      </Routes>
    </Router>
=======
    <div className="App">
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
          <Route exact path="/view" element={<ViewPost />}></Route>
          <Route exact path="/blogsview/:key/:value" element={<BlogList />}></Route>
          <Route path="/posts/:postId" element={<ViewPost />}></Route>
        </Routes>
      </Router>
    </div>
>>>>>>> 88408f051fb67192e760ba27d512895d1b905ce9
  );
}

export default App;
