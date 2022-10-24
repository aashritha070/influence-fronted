import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import "./BlogList.css";
const defaultBlogCoverPic = require("../../static/defaultBlogCoverPic.png");

<<<<<<< HEAD
function blogsList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogsByTag, setblogsByTag] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [allTags, setAllTags] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isload, setIsLoad] = useState(false);
  const jwtToken = {
    token: localStorage.getItem("Token"),
  };
=======
const BlogList = () => {

  const [blogsByTag, setblogsByTag] = React.useState([]);
  const [allTags, setAllTags] = useState([]);
  const [isload, setIsLoad] = useState(false);
  const { key, value } = useParams();
  const jwtToken = localStorage.getItem("Token");
>>>>>>> 88408f051fb67192e760ba27d512895d1b905ce9

  useEffect(() => {
    setIsLoad(true);
    const fetchBlogsByTag = async () => {
      console.log("jwtToken", key, value);
      await axios
        .post("http://localhost:5000/blog/selectedtag", { token: jwtToken, tag: value })
        .then((res) => {
          console.log("fetchBlogsByTags", res);
          setblogsByTag(res.data.data);
        })
        .catch((err) => {
          console.log("fetchBlogsByTags", err);
        });
    };

    const fetchBlogsByAuthor = async () => {
      console.log("jwtToken", key, value);
      await axios
        .post("http://localhost:5000/blog/author", { token: jwtToken, authorEmailId: value })
        .then((res) => {
          console.log("fetchBlogsByTags", res);
          setblogsByTag(res.data.data);
        })
        .catch((err) => {
          console.log("fetchBlogsByTags", err);
        });
    };

    if (key === 'tags') fetchBlogsByTag();
    else if (key === 'author') fetchBlogsByAuthor();

    const fetchAllTags = async () => {
      await axios
        .post("http://localhost:5000/tags", { token: jwtToken })
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
          <span className="home-subtitle">Here is your find..</span>
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
      </div>
    </div>
  );
}
<<<<<<< HEAD
export default blogsList;
=======

export default BlogList;
>>>>>>> 88408f051fb67192e760ba27d512895d1b905ce9
