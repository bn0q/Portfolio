import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiThreads } from "react-icons/si";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me tell you <span className="purple"> a bit</span> about
              myself
            </h1>
            <p className="home-about-body">
              I’m a passionate<span className="purple"> Computer Science </span>{" "}
              student with a focus on 👨‍💻 web development
              <br />
              <br /> especially in creating modern and efficient web
              applications using technologies like
              <i>
                <b className="purple">
                  {" "}
                  React.js, Next.js , Node.js and MongoDB.{" "}
                </b>
              </i>
              <br />
              <br />I have hands-on experience in building &nbsp;
              <i>
                <b className="purple"> full-stack applications </b> and I enjoy
                solving complex problems through creative coding
                {/* <b className="purple">Blockchain.</b> */}
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              <span className="purple">connect </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:adithep.th2002@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail /> {/* Icon for email */}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/bn0q"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.threads.net/@p0nd.s?hl=th"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiThreads />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adithep-thabthaem-6994a8185/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/p0nd.s/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
