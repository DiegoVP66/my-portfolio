import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Project } from "types/projects";
import { makeBackendRequest } from "utils/request";

import "./styles.css";

type Props = {
  project: Project;
  onDelete: Function;
};

const ProjectCRUDCard = ({ project, onDelete }: Props) => {
  const history = useNavigate();

  const handleDelete = (projectId: number) => {
    if (!window.confirm("tem certeza que deseja deletar?")) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/projects/${projectId}`,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        onDelete();
        history("/admin/crud");
      })
      .catch((error) => {
        console.log("Erro ao deletar " + error);
      });
  };
  return (
    <div className="project-crud-card-container">
      <h1>{project.title}</h1>
      <img src={project.image} alt="" />
      <h4>{project.content}</h4>
      <p>{project.link}</p>
      <p>{project.repository}</p>
      <div className="btn-project-crud-container">
        <div className="project-delete-button">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(project.id)}
          >
            DELETE
          </button>
        </div>
        <div>
          <Link to={`/admin/crud/${project.id}`}>
            <button className="btn btn-project-edit">EDIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCRUDCard;
