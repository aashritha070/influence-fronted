import "./TagsPage.css";
import {FaAcquisitionsIncorporated,FaSpaceShuttle,FaSkyatlas,FaSafari, FaStarOfLife } from "react-icons/fa";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import Navbar from "../../components/Navbar/Navbar";
import Form from 'react-bootstrap/Form';
function Tags() {
    
    return (
        <div className="home-container-tag">
          <div className="container-content-tag">
            <p className="container-title-tag">Choose your domain of interest!</p>
            <ul className="tags-list">
       <li className="tags-item"> <MDBCheckbox  name='inlineCheck' id='inlineCheckbox1' value='option1' label='life' inline /></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox2' value='option2' label='health' inline /></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox1' value='option1' label='music' inline /></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox2' value='option2' label='science' inline/></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox1' value='option1' label='data Science' inline/></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox2' value='option2' label='Psychology' inline/></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox1' value='option1' label='music' inline /></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox2' value='option2' label='science' inline/></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox1' value='option1' label='data Science' inline/></li>
       <li className="tags-item">  <MDBCheckbox  name='inlineCheck' id='inlineCheckbox2' value='option2' label='Psychology' inline/></li></ul>
           {/* <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <label className="tag-label" for="life"><FaStarOfLife /> Life</label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <label className="tag-label" for="life"><FaSafari /> Philosophy</label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <label className="tag-label" for="life"><FaSkyatlas /> Health</label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <label className="tag-label" for="life"><FaAcquisitionsIncorporated /> Technology</label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <label className="tag-label" for="life"><FaSafari /> Movies</label>
         
            <input className="tag-input" type="radio" name="life" id="tag-item"></input>
            <label className="tag-label" for="life"><FaStarOfLife /> Life</label> */}
         

          
       <button className="button">Next</button>
          </div>
         
        </div>
      );
    
  }
  
  export default Tags;