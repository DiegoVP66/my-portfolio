import { Project } from "types/projects";
import "./styles.css";
type Props = {
  project : Project
};
const Projects = ({ project }: Props) => {
  return (
    <div className="container projects-container">
      <div className="projects-img">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image} alt="" />
        </a>
      </div>
      <h3>{project.title}</h3>
      <div className="projects">
        <div className="projects-content">
          <p>{project.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
