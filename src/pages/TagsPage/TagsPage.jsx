import "./TagsPage.css";
import {
  FaAcquisitionsIncorporated,
  FaSpaceShuttle,
  FaSkyatlas,
  FaSafari,
  FaStarOfLife,
} from "react-icons/fa";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Navbar from "../../components/Navbar/Navbar";
import Form from "react-bootstrap/Form";
function Tags() {
  return (
    <div className="home-container-tag">
      <div className="container-content-tag">
        <p className="container-title-tag">Choose your domain of interest!</p>
        <ul className="tags-list">
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox1"
              value="option1"
              label="life"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox2"
              value="option2"
              label="health"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox1"
              value="option1"
              label="music"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox2"
              value="option2"
              lLabel="science"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox1"
              value="option1"
              label="data Science"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox2"
              value="option2"
              label="Psychology"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox1"
              value="option1"
              label="music"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox2"
              value="option2"
              label="science"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox1"
              value="option1"
              label="data Science"
              inline
            />
          </li>
          <li className="tags-item">
            {" "}
            <MDBCheckbox
              name="inlineCheck"
              id="inlineCheckbox2"
              value="option2"
              label="Psychology"
              inline
            />
          </li>
        </ul>
        {/* <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <Form.Label className="tag-Form.Label" for="life"><FaStarOfLife /> Life</Form.Label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <Form.Label className="tag-Form.Label" for="life"><FaSafari /> Philosophy</Form.Label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <Form.Label className="tag-Form.Label" for="life"><FaSkyatlas /> Health</Form.Label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <Form.Label className="tag-Form.Label" for="life"><FaAcquisitionsIncorporated /> Technology</Form.Label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <Form.Label className="tag-Form.Label" for="life"><FaSafari /> Movies</Form.Label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <Form.Label className="tag-Form.Label" for="life"><FaStarOfLife /> Life</Form.Label> */}

        <button className="button">Next</button>
      </div>
    </div>
  );
}

export default Tags;
