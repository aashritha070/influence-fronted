/* eslint-disable react-hooks/exhaustive-deps */
import "./currentPost.css";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function CurrentPost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const cover = "https://influennce-backend.herokuapp.com/coverPic/";
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [tags, setTags] = useState([]);
  const { user } = useContext(Context);
  let count = 0;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://influennce-backend.herokuapp.com/posts/" + path
      );

      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setTags(res.data.tags);
      console.log(res.data);
    };

    getPost();
    count = count + 1;
    console.log(count);
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://influennce-backend.herokuapp.com/posts/${post._id}`,
        {
          data: { username: user.username },
        }
      );
      window.location.replace("/");
    } catch (err) {}
  };

  const handleEdit = async () => {
    try {
      await axios.put(
        `https://influennce-backend.herokuapp.com/posts/${post._id}`,
        {
          username: user.username,
          Title: title,
          description,
        }
      );
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="currentPost">
      <div className="currentViewPost">
        {post.coverPic !== "" ? (
          <img
            src={cover + post.coverPic}
            alt="none"
            className="viewingImg"
          ></img>
        ) : (
          <img
            className="viewingImg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            alt="none"
          ></img>
        )}

        <div className="tags">
          {tags.map((c) => (
            <li className="postTags" key={c} value={c}>
              {c}
            </li>
          ))}
        </div>
      </div>
      {editMode ? (
        <input
          type="text"
          className="postTitleEdit"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h1 className="postTitle">
          {post.Title}

          {post.username === user?.username && (
            <div className="blogChanges">
              <span className="blogEdit" onClick={() => setEditMode(true)}>
                Edit
              </span>
              <span className="blogDelete" onClick={handleDelete}>
                Delete
              </span>
            </div>
          )}
        </h1>
      )}

      <div className="CurrentInfo">
        <span className="author">
          Author:{" "}
          <Link to={`/?user=${post.username}`}>
            {" "}
            <b>{post.username}</b>
          </Link>
        </span>
        <span className="Date">
          <b>{new Date(post.updatedAt).toDateString()}</b>
        </span>
      </div>

      {editMode ? (
        <textarea
          className="DescriptionEdit"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <p className="desc">{post.description}</p>
      )}
      {editMode ? (
        <button className="saveEdits" onClick={handleEdit}>
          Save
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
