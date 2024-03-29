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
import MoviesOnRent from "../assets/img/MoviesOnRent.PNG"
import InstaClone from "../assets/img/InstaClone.png"
import LaalMati from "../assets/img/LaalMati.PNG"
import Tnega from "../assets/img/Tnega.PNG"
import SpringBooty from "../assets/img/SpringBooty.PNG"


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

  const reactProjects = [

    {
      title: "LaalMati.Com",
      description: "Co-Founder , Ecommerce App which solves the problem of Recycable Ganesh Murtis",
      imgUrl: LaalMati,
      code:"https://github.com/PavanButke/Sculptura",
      demo:"https://statuesque-biscotti-8bff76.netlify.app/"
    },
    
    {
      title: "Project Tnega",
      description: "Associated with Simplyfi tech Banglore, KN.      • Develop new features like Graphs and Maps with existing code with React.• Integrating RESTfull APIs.• Frontend UI/UX implementatio. ",
      imgUrl: Tnega,
      code: "",
      demo: "https://tnega.tn.gov.in/"
    },
    {
      title: "MoviesOnRent",
      description: "Fronted Website,allows to show movies details. In this site, we have used REACT.js for entire development.Learnt concept of Props , ArrowFunc. ",
      imgUrl: MoviesOnRent,
      code: "https://github.com/PavanButke/Web_Dev_PP11/tree/main/React%20Projects/MOVIES%20APP/movies",
      demo: "https://curious-manatee-83a528.netlify.app/"
    },
    {
      title: "Reels App",
      description: "Used REACT.Js Library. Learnt concept of Context, AuthContext, SignUp Feature , Redux , Hooks , Media Import. For UI ,we used Bootstrap, for DB used Firestore , integrated using Firebase.",
      imgUrl: InstaClone,
      code:"https://github.com/PavanButke/InstaReels",
      demo:"https://tranquil-pika-ba9bfc.netlify.app/Login"
    },



  ];

  const backendProjects = [

    {
      title: "LaalMati.Com",
      description: "Co-Founder ,Developed Ecommerce Backend Using Node.js Express.js MongoDB",
      imgUrl: LaalMati,
      code:"https://github.com/PavanButke/Sculptura",
      demo:"https://statuesque-biscotti-8bff76.netlify.app/"
    },
  ];

    const springBootProject = [

      {
        title: "ProductServices",
        description: "A Backend MicroService Built Using Spring Boot , here we have used EurekaServer , LoadBalancer , DiscoveryClient ",
        imgUrl: SpringBooty,
        code:"https://github.com/PavanButke/springboot/tree/MicroserviceA_Z",
       
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
                <p>Kindly Find the Hobby Time Projects.</p>
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
                          reactProjects.map((reactProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...reactProjects}
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
                      <Row>
                        {
                          backendProjects.map((backendProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...backendProjects}
                                />
                            )
                          })
                          
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          springBootProject.map((springBootProject, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...springBootProject}
                                />
                            )
                          })
                          
                        }
                      </Row>
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
