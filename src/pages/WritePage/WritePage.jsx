import "./WritePage.css";
import Form from "react-bootstrap/Form";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import { TagInput } from "evergreen-ui";
import { TextInputField } from "evergreen-ui";
import "react-quill/dist/quill.snow.css";
import { Pane, FileUploader, FileCard } from "evergreen-ui";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WritePost() {
  const [convertedText, setConvertedText] = useState("Some default content");
  const [files, setFiles] = React.useState([]);
  const [fileRejections, setFileRejections] = React.useState([]);
  const [allTags, setAllTags] = useState([]);
  const handleChange = React.useCallback((files) => setFiles([files[0]]), []);
  const [value, setValue] = React.useState("");
  const handleRejected = React.useCallback(
    (fileRejections) => setFileRejections([fileRejections[0]]),
    []
  );
  const handleRemove = React.useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);

  const [values, setValues] = React.useState(["First", "Second"]);

  const allValues = React.useMemo(
    () => [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
      "Eighth",
      "Ninth",
      "Tenth",
    ],
    []
  );
  const autocompleteItems = React.useMemo(
    () => allValues.filter((i) => !values.includes(i)),
    [allValues, values]
  );

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

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="write-wrapper">
        <div className="image-container">
          <Pane maxWidth={654}>
            <FileUploader
              label="Upload File"
              description="You can upload 1 file. File can be up to 50 MB."
              maxSizeInBytes={50 * 1024 ** 2}
              maxFiles={1}
              onChange={handleChange}
              onRejected={handleRejected}
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
          <TagInput
            inputProps={{ placeholder: "Enter something..." }}
            values={values}
            onChange={setValues}
            autocompleteItems={autocompleteItems}
          />
        </div>
        <div className="blot-title-container">
        <TextInputField
            placeholder="Title.."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <div className="blog-edit-container">
          <ReactQuill
            theme="snow"
            value={convertedText}
            onChange={setConvertedText}
            style={{ minHeight: "300px", maxHeight: "800px" }}
          />
        </div>
        <div className="blog-write-btn">
        <button className="blog-post-btn" >Post</button>
        </div>
       
      </div>
    </div>
  );
}
