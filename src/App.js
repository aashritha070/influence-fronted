import React, { useContext } from 'react';
import './app.css';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import ViewPost from './pages/viewPost/ViewPost.jsx';
import WritePost from './pages/writePost/WritePost.jsx';
import SignUp from './pages/signUp/SignUp.jsx';
import { Context } from '../src/context/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/login"
          element={user ? <Home /> : <Login />}
        ></Route>
        <Route
          exact
          path="/SignUp"
          element={user ? <Home /> : <SignUp />}
        ></Route>
        <Route exact path="/writePost" element={<WritePost />}></Route>
        <Route path="/posts/:postId" element={<ViewPost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

//mongodb+srv://aashritha:<password>@influence-cluster.fjxcn84.mongodb.net/?retryWrites=true&w=majority
//work on sending username/id in backend. 