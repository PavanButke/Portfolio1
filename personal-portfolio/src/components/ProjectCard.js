import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,code,demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}></img>
        <div className="proj-txtx">
          <h4>{title} </h4>
          <span>{description}</span>
          <h3></h3>
          <a href={code} >
            <input type="button"  value="Code" />
          </a>
          <h3></h3>
          <a href={demo}>
            <input type="button" value="Demo" />
          </a>
        </div>
      </div>
    </Col>
  )
}
