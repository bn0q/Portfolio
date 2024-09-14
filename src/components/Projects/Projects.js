import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LINEOA from "../../Assets/line.png";
import Credits from "../../Assets/Credit.png";
import gamebone from "../../Assets/gamebone.png";
import booking from "../../Assets/booking.png";
import dbdesign from "../../Assets/dbdesign.png";
import gamelevel from "../../Assets/gamelevel.png";
import iso from "../../Assets/iso.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LINEOA}
              isBlog={true}
              title="Developed a LINE Official Account (OA)"
              description="Developed a LINE Official Account (OA) system with dynamic Richmenu and chatbot functionality. Integrated Webhook to respond with custom messages and Imagemaps based on specific keywords, and used Dialogflow for handling greetings with real-time responses and loading animations. Additionally, implemented LIFF to display user profiles, send Flex Messages back to chat, and allow sharing of these messages with other users. This project showcases expertise in using LINE APIs to create engaging and interactive user experiences"
              demoLink="https://lin.ee/Ewr2C5Y"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Credits}
              isBlog={false}
              title="[Developing]  Credit Checking System Based on Curriculum Structure"
              description="The Credit Checking System is designed to assist students and academic advisors in tracking and verifying the completion of academic requirements based on a predefined curriculum structure. This system automatically cross-references a student's transcript with the curriculum to check if the required credits have been completed. It identifies any missing courses or areas that the student needs to focus on, providing suggestions for courses that still need to be taken in order to fulfill graduation requirements."
              ghLink="https://github.com/bn0q/projectcs"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamebone}
              isBlog={true}
              title="Game With Unity Project"
              description="Turn-based Game: A tactical turn-based strategy game, featuring carefully designed mechanics that engage players in thoughtful decision-making."
              demoLink="https://simmer.io/@quod/bone-game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Booking Class System"
              description="Analyzed and designed a fitness class booking system by comparing core features from 10 popular apps, identifying key functionalities, and improving usability. Created an ERD to design the database structure, mapping relationships between users, classes, instructors, and schedules for efficient data management. The system is optimized for scalability and supports high-traffic environments with real-time class booking and seamless scheduling"
              demoLink="https://drive.google.com/drive/u/3/folders/1yWwdXbgIG6GK-YL0sAMdBjCJeU5fe0NY"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbdesign}
              isBlog={false}
              title="Online Convenience Store Database"
              description="Designed and developed a database system for an online convenience store. The system was structured using an Entity-Relationship Diagram (ERD) to manage various components such as customers, employees, products, and orders. Key functionalities include tracking customer orders, managing product inventory, and ensuring efficient delivery operations. The database was normalized to 3NF to eliminate data redundancy and improve query performance."
              demoLink="https://drive.google.com/drive/u/3/folders/1dq_bbIoL67sv9_f88tP3laYLeBfT5UNm"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamelevel}
              isBlog={true}
              title="Game With Unity Project"
              description="GameLevel: A challenging adventure platformer where players navigate through multiple levels filled with obstacles and enemies."
              demoLink="https://simmer.io/@quod/gamelevel"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iso}
              isBlog={true}
              title="Game With Unity Project"
              description="IsometricRoom: A visually appealing isometric game environment with interactive elements and strategic gameplay"
              demoLink="https://simmer.io/@quod/isometricroomqoud"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
