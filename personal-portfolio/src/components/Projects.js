import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import CameraApp from "../assets/img/CameraApp.PNG"
import WhiteBoard from "../assets/img/WhiteBoard.PNG"
import TicketApp from "../assets/img/TicketApp.PNG"
import TodoApp from "../assets/img/TodoApp.PNG"
import excel from "../assets/img/excel.PNG"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Photos And Videos",
      description: "Simple Fully Featured Camera app based on , JavaScript, HTML & CSS + DOM programming. Used IndexDB as local storage Imported Fonts and Filters using CDN. Used Web Animation",
      imgUrl: CameraApp,
      code: "https://github.com/PavanButke/Web_Dev_PP11/tree/main/PEPCODING/MODULE_2/Whiteboard/activity"
     ,
      demo: ""
    },
    {
      title: "WhiteBoard",
      description: "Draw->Erase->Undo->Redo->Snap-> Download ",
      imgUrl: WhiteBoard,
      code:"https://github.com/PavanButke/Web_Dev_PP11/tree/main/PEPCODING/MODULE_2/Whiteboard/activity",
      demo:""
    },
    {
      title: "Ticket App",
      description: "Something Like Jira App , Used To Notes , On the Basis of Color Task is Saved!",
      imgUrl: TicketApp,
      code:"https://github.com/PavanButke/Web_Dev_PP11/tree/main/PEPCODING/MODULE_2/TicketApp/activity",
      demo:""
    },
    {
      title: "To Do App",
      description: "A Simple Todo App Where You can Keep List of Daily Tasks",
      imgUrl: TodoApp,
      code:"https://github.com/PavanButke/Web_Dev_PP11/tree/main/PEPCODING/MODULE_2/activity",
      demo:""
    },
    {
      title: "Excel Sheet",
      description: "Web Version of Excel Sheet",
      imgUrl: excel,
      code:"https://github.com/PavanButke/Web_Dev_PP11/tree/main/PEPCODING/MODULE_2/Excel%20Clone"
      ,demo:""
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML CSS JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React.js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Node.js+Express.js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">SpringBoot</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
