import "./TagsPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Form from "react-bootstrap/Form";
function Tags() {
  return (
    <div><Navbar /><div className="home-container-tag">
      <div className="container-content-tag">
        <p className="container-title-tag">Choose your domain of interest!</p>



        <button className="button">Next</button>
      </div>
    </div></div>
  );
}

export default Tags;
