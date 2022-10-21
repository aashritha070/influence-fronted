import "./post.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log("isCoverPic", Object.hasOwn(post, "coverPic"));

  const cover = "https://influennce-backend.herokuapp.com/coverPic/";
  const isCoverPic = Object.hasOwn(post, "coverPic");
  return (
    <div className="post">
      {isCoverPic ? (
        <img className="thumbNail" src={cover + post.coverPic} alt="" />
      ) : (
        <img
          className="thumbNail"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          alt=""
        ></img>
      )}

      <div className="postInfo">
        <div className="postCategory">
          {post.tags.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/posts/${post._id}`}>
          <span className="postTitle">{post.Title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.updatedAt).toDateString()}
        </span>
        <p className="postDesc">{post.description}</p>
      </div>
    </div>
  );
}
