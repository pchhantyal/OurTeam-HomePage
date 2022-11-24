import React from "react";
import "./styles/Home.css";
import HomeImage1 from "./assets/ResearchPark.jpg";
import HomeImage2 from "./assets/WaukeshaCampus.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="sliderr">
        <div className="Image1">
          <Link to="/Reserve">
            <img src={HomeImage1}></img>
          </Link>
          <h3>Research Park</h3>
        </div>
        <div className="Image1">
          <Link to="/Reserve">
            <img src={HomeImage2}></img>
          </Link>
          <h3>Waukesha Campus</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
