import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css";
const defaultBlogCoverPic = require("../../static/defaultBlogCoverPic.png");

function Home() {
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
  const handleTagSelect = (id) => {
    console.log("handleTagSelect", id);
  };
  if (isload) {
    return <div></div>;
  }

  return (
    <div className="home-wrapper">
      <Navbar />
      <Header />
      <div className="homepage-container">
        <div class="search-container">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            ></input>
            <button className="btn btn-outline-secondary example" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="home-content">
          <span className="home-subtitle">Top picks for you!</span>
          <div className="d-flex  gap-5 mt-3">
            {blogsByTag.map((blog) => (
              <Card style={{ width: "20rem" }}>
                {blog.coverPic ? (
                  <Card.Img variant="top" src={defaultBlogCoverPic} />
                ) : (
                  <Card.Img variant="top" src={defaultBlogCoverPic} />
                )}
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.content}</Card.Text>
                  <a href="/viewpost">
                    <Button variant="primary">read more</Button>
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <div className="tag-container">
          <span className="tag-title">Categories</span>
          <div className=" tag-wrapper">
            {allTags.map((tag) => (
              <button className="tag-button" onClick={handleTagSelect}>
                {tag.label}
              </button>
            ))}
          </div>
        </div>
        <div className="home-content">
          <span className="home-subtitle">Explore more</span>
          <div className="d-flex gap-5 mt-3">
            {allBlogs.map((blog) => (
              <Card style={{ width: "20rem" }}>
                {blog.coverPic ? (
                  <Card.Img variant="top" src={defaultBlogCoverPic} />
                ) : (
                  <Card.Img variant="top" src={defaultBlogCoverPic} />
                )}
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.content}</Card.Text>
                  <a href="/viewpost">
                    <Button variant="primary">read more</Button>
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default  Home;