import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import { TagInput } from "evergreen-ui";
import { TextInputField } from "evergreen-ui";
import { Pane, FileUploader, FileCard } from "evergreen-ui";
import { useState, useEffect, useCallback, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";


import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "./WritePage.css";
import { Button } from "react-bootstrap";

export default function WritePost() {
  const [convertedText, setConvertedText] = useState("Some default content");
  const [files, setFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [isLoad, setIsLoad] = useState('false')
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const jwtToken = localStorage.getItem("Token")
  const handleCoverPicUpload = useCallback((files) => setFiles([files[0]]), []);
  const handleCoverPicRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), []);
  const handleRemove = useCallback(() => { setFiles([]); setFileRejections([]); }, []);

  const [values, setValues] = useState([]);
  const [allTagLabels, setAllTagLabels] = useState([]);

  const successToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const errorToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const handleBlogPost = async () => {
    const formData = new FormData();
    formData.append('coverPic', files[0], files[0].name)
    formData.append('token', jwtToken)
    console.log("handleCoverPicSubmit", formData)
    console.log("blogTitle, blogContent", blogTitle, blogContent)

    await axios
      .post("http://localhost:5000/blog/upload", formData, {
        headers: {
          "x-access-token": jwtToken
        }
      })
      .then((res) => {
        console.log("handleCoverPicSubmit", res);
      })
      .catch((err) => {
        console.log("handleCoverPicSubmit", err);
      });
    
    await axios
      .post("http://localhost:5000/blog/create", {
        headers: {
          "x-access-token": jwtToken
        }
      })
      .then((res) => {
        console.log("handleCoverPicSubmit", res);
      })
      .catch((err) => {
        console.log("handleCoverPicSubmit", err);
      });

  }

  const autocompleteItems = useMemo(
    () => allTagLabels.filter((i) => !values.includes(i)),
    [allTagLabels, values]
  );

  useEffect(() => {
    setIsLoad(true);

    const fetchAllTags = async () => {
      await axios
        .post("http://localhost:5000/tags", { token: jwtToken })
        .then((res) => {
          setAllTags(res.data.tags)
          setAllTagLabels(allTags.map((tag) => tag['label']))
        })
        .catch((err) => {
          console.log("fetchAllTags", err);
        });
    };
    fetchAllTags();

    setIsLoad(false);
  }, []);

  if (isLoad) {
    return <div></div>
  }
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="write-wrapper">
        <div className="image-container">
          <Pane>
            <FileUploader
              label="Upload your blog's cover image"
              description="You can upload 1 file. File can be up to 50 MB."
              maxSizeInBytes={50 * 1024 ** 2}
              maxFiles={1}
              onChange={handleCoverPicUpload}
              onRejected={handleCoverPicRejected}
              renderFile={(file) => {
                const { name, size, type } = file;
                const fileRejection = fileRejections.find(
                  (fileRejection) => fileRejection.file === file
                );
                const { message } = fileRejection || {};
                return (
                  <FileCard
                    key={name}
                    isInvalid={fileRejection != null}
                    name={name}
                    onRemove={handleRemove}
                    sizeInBytes={size}
                    type={type}
                    validationMessage={message}
                  />
                );
              }}
              values={files}
            />
          </Pane>
        </div>
        <div className="tag-add-container">
          <h6 className="tag-add-title">Please choose the categories</h6>
         <p><TagInput
            inputProps={{ placeholder: "Enter something..." }}
            values={values}
            onChange={setValues}
            autocompleteItems={autocompleteItems}
          /></p> 
        </div>
        <div className="blog-title-container">
          <TextInputField
            inputHeight={40}
            placeholder="Title.."
            className="eg-textInput"
            onChange={(e) => setBlogTitle(e.target.value)}
            value={blogTitle}
          />
        </div>
        <div className="blog-edit-container">
          <ReactQuill
            theme="snow"
            value={blogContent}
            onChange={setBlogContent}
            style={{ minHeight: "fit-content" }}
          />
        </div>
        <div className="blog-footer-container">
          <Button onClick={handleBlogPost}>Post my blog</Button>
        </div>
      </div>
    </div>
  );
}
