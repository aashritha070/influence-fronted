import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import "./home.css";
const defaultBlogCoverPic = require("../../static/defaultBlogCoverPic.png");

export default function Home() {
  const [blogsByTag, setblogsByTag] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [isload, setIsLoad] = useState(false);
  const jwtToken = {
    token: localStorage.getItem("Token"),
  };

  useEffect(() => {
    setIsLoad(true);
    const fetchBlogsByTags = async () => {
      console.log("jwtToken", jwtToken);
      await axios
        .post("http://localhost:5000/blog/tag", jwtToken)
        .then((res) => {
          if (res.data?.message === "No tags available") {
            return window.location.replace("/tagselect");
          }
          console.log("fetchBlogsByTags", res);
          setblogsByTag(res.data.data);
        })
        .catch((err) => {
          console.log("fetchBlogsByTags", err);
        });
    };
    fetchBlogsByTags();

    const fetchAllBlogs = async () => {
      await axios
        .post("http://localhost:5000/blog/all", jwtToken)
        .then((res) => {
          console.log("fetchAllBlogs", res);
          setAllBlogs(res.data.data);
        })
        .catch((err) => {
          console.log("fetchAllBlogs", err);
        });
    };
    fetchAllBlogs();

    const fetchAllTags = async () => {
      await axios
        .post("http://localhost:5000/tags", jwtToken)
        .then((res) => {
          console.log("fetchAllTags", res);
          setAllTags(res.data.tags);
        })
        .catch((err) => {
          console.log("fetchAllTags", err);
        });
    };

    fetchAllTags();
    setIsLoad(false);
  }, []);

  const handleReadBlog = (id) => {
    console.log("handleReadBlog", id);
  };
  if (isload) {
    return <div></div>;
  }

  return (
    <div className="home-wrapper">
      <Navbar />
      <Header />
      <div className="Home">
        {allBlogs.map((blog) => (
          <CCard style={{ width: "18rem" }}>
            {blog.coverPic ? (
              <CCardImage src={defaultBlogCoverPic} />
            ) : (
              <CCardImage orientation="top" src="../../static/background.jpg" />
            )}
            <CCardBody>
              <CCardTitle>{blog.title}</CCardTitle>
              <CCardText>{blog.content}</CCardText>
              <CButton onClick={handleReadBlog(blog._id)}>Read more</CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </div>
  );
}
