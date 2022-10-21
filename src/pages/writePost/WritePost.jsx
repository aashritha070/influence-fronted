import "./writePost.css";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WritePost() {
  const [Title, settitle] = useState("");
  const [description, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  // const [userTag, setUserTag] = useState('');
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState([]);
  const [file, setFile] = useState(null);

  const successToast = () => {
    toast.success("post has been added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  useEffect(() => {
    const getTag = async () => {
      const res = await axios.get(
        "https://influennce-backend.herokuapp.com/tag"
      );
      const tagsArray = [{ _id: "0", name: "Select one/many" }, ...res.data];
      setTags(tagsArray);
      console.log(tags);
    };
    getTag();
  }, [tags]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = {
      username: user.username,
      Title,
      description,
      tags: selectedTags,
    };
    console.log(blog);

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      blog.coverPic = filename;
      try {
        await axios.post("/insert", data);
      } catch (err) {}
    }

    await axios
      .post("https://influennce-backend.herokuapp.com/posts/", blog)
      .then((res) => {
        console.log("hihih");
        successToast();
        return window.location.replace(`/posts/${res.data._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="writePost">
        <ToastContainer />
        {file && (
          <img className="writingImg" src={URL.createObjectURL(file)} alt="" />
        )}

        <form className="formInput" onSubmit={handleSubmit}>
          <div className="imageArea">
            <label htmlFor="fileInput" className="icon">
              <i className="fa-solid fa-image"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="tagsArea">
            <div className="selectTags">
              <select
                className="dropdown_box"
                value={" "}
                onChange={(e) => {
                  const selectedTag = e.target.value;
                  setSelectedTags([...selectedTags, selectedTag]);
                  const latestTags = tags.filter(
                    (tag) => tag.name !== selectedTag
                  );
                  setTags(latestTags);
                }}
              >
                {tags.map((c) => (
                  <option key={c._id} value={c.name} className="dropdown">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="selectedTags">
              Selected tags:
              {selectedTags.map((tag) => (
                <span
                  className="tagsSelected"
                  style={{ color: "black" }}
                  key={tag}
                >
                  {tag}{" "}
                </span>
              ))}
            </div>
          </div>
          <div className="contentArea">
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Name it..."
              type="text"
              autoFocus={true}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="contentArea">
            <textarea
              rows="50"
              className="writeInput writeText"
              placeholder="whats on your mind..."
              type="text"
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className="postBtn" type="submit">
            post
          </button>
        </form>
      </div>
    </div>
  );
}
