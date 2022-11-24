import React from "react";
import "./styles/OurTeam.css";
import Team1 from "./assets/Punam.jpg";
import Team2 from "./assets/Evan.jpg";
import Team3 from "./assets/Charly.jpg";
import Team4 from "./assets/Tremane.jpg";
import Navbar from "./Navbar";

function OurTeam() {
  return (
    <div>
      <Navbar />
      <div className="Wrapper">
        <h1>OurTeam</h1>
        <div className="Team">
          <div className="TeamMember">
            <img src={Team1}></img>
            <h2>Punam Chhantyal</h2>
            <p className="role">Quality Analyst</p>
          </div>
          <div className="TeamMember">
            <img src={Team2}></img>
            <h2>Evan Boettner</h2>
            <p className="role">Technical Analyst</p>
          </div>
          <div className="TeamMember">
            <img src={Team3}></img>
            <h2>Charly Olivares</h2>
            <p className="role">Project Manager</p>
          </div>
          <div className="TeamMember">
            <img src={Team4}></img>
            <h2>Tremane Beal</h2>
            <p className="role">Client Engagement Manager</p>
          </div>
          <div className="TeamMember">
            <h2>Sophia Toscano</h2>
            <p className="role">Business Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
