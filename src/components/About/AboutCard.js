import React from "react";
import Card from "react-bootstrap/Card";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";
import { IoLogoGameControllerB } from "react-icons/io";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ADITHEP THABTHAEM </span>
            from <span className="purple">KANCHANABURI,THAILAND.</span>
            <br />a passionate<span className="purple"> Computer Science </span>
            student with a deep interest in software development
            <br />
            Over the past few years, I've honed my skills in both
            <span className="purple"> front-end </span>and
            <span className="purple"> back-end</span> development, and I
            particularly enjoy working with React.js, Next.js, and Unity for
            game development
            <br />
            <br />
            Outside of coding, I enjoy these hobbies and activities!
          </p>
          <ul>
            <li className="about-activity">
              <IoMdFootball /> Playing Sports e.g. Swimming, Football, Badminton
            </li>
            <li className="about-activity">
              <IoLogoGameControllerB /> Playing Games e.g. Valorant, The Crew 2,
              Grounded
            </li>
            <li className="about-activity">
              <FaPersonSwimming /> Swimming Coach L2 Certified by the Swimming
              Association of Thailand
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "It’s simple: you either know or you don’t. If you don’t, go learn"{" "}
          </p>
          <footer className="blockquote-footer">Adithep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
