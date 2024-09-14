import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFileEarmarkText } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto">
          {/* ถ้ามี ghLink และ demoLink ให้แสดงปุ่มทั้งคู่ */}
          {props.ghLink && props.demoLink ? (
            <>
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp; GitHub
              </Button>
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            </>
          ) : (
            <>
              {/* ถ้ามี ghLink อย่างเดียว */}
              {props.ghLink && (
                <Button variant="primary" href={props.ghLink} target="_blank">
                  <BsGithub /> &nbsp; GitHub
                </Button>
              )}

              {/* ถ้ามี demoLink อย่างเดียว */}
              {props.demoLink && !props.ghLink && (
                <Button variant="primary" href={props.demoLink} target="_blank">
                  {props.isBlog ? (
                    <>
                      <CgWebsite /> &nbsp; Demo
                    </>
                  ) : (
                    <>
                      <BsFileEarmarkText /> &nbsp; Case Study
                    </>
                  )}
                </Button>
              )}
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
