import "./styles.css";
type Props = {
  title: string;
  image: string;
  content: string;
  link: string;
};
const Projects = ({ title, image, content, link }: Props) => {
  return (
    <div className="container projects-container">
      <div className="projects-img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt="" />
        </a>
      </div>
      <h3>{title}</h3>
      <div className="projects">
        <div className="projects-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
