import React from "react";
import "../styles/Projects.scss";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

////////////// mobile img ////////////////
import BarkMingleImg from "../assets/projects/bm-landing-screen.png";

////////////// web img ////////////////
import FunsiesImg from "../assets/projects/funsies-dropdown.png";
import JungleImg from "../assets/projects/jungle-rails-landing.png";
import PhotoLabsImg from "../assets/projects/photolabs.png";

////////////// illustration img ////////////////
import BenjiImg from "../assets/illustrations/benji.png";
import CinnyOscar from "../assets/illustrations/cinny-oscar.png";
import ChareneImg from "../assets/illustrations/charene.png";
import FurbendersImg from "../assets/illustrations/furbenders.png";
import LynnImg from "../assets/illustrations/lynn.png";
import MaddyImg from "../assets/illustrations/maddy.png";
import MotherImg from "../assets/illustrations/mother.png";


const Projects = () => {
  const webProjects = [
    {
      id: 1,
      name: "Funsies",
      img: FunsiesImg,
      link: "https://github.com/carmshito/Funsies",
    },
    {
      id: 2,
      name: "Jungle Rails",
      img: JungleImg,
      link: "https://github.com/carmshito/jungle-rails",
    },
    {
      id: 3,
      name: "PhotoLabs",
      img: PhotoLabsImg,
      link: "https://github.com/carmshito/photolabs",
    },
  ];

  const mobileProjects = [
    {
      id: 1,
      name: "Bark Mingle",
      img: BarkMingleImg,
      link: "https://github.com/carmshito/BarkMingle.git",
    },
  ]

  const illustrations = [
    {
      id: 1,
      img: BenjiImg
    },
    {
      id: 2,
      img: CinnyOscar
    },
    {
      id: 3,
      img: FurbendersImg
    },
    {
      id: 4,
      img: LynnImg
    },
    {
      id: 5,
      img: MaddyImg
    },
    {
      id: 6,
      img: MotherImg
    },
    {
      id: 7,
      img: ChareneImg
    },
  ]
  return (
    <div className="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              architecto recusandae similique molestiae sunt dolore! Quibusdam
              odio modi eos aut eligendi necessitatibus nisi inventore natus!
              Tempore cupiditate aliquam harum maxime!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mobile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Illustrations</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      webProjects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      mobileProjects.map((project, index) => {
                        return (
                          <ProjectCard 
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      illustrations.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
