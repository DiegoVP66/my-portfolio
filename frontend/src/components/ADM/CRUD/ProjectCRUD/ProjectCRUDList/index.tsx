import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SpringPage } from "types/spring";
import { makeBackendRequest } from "utils/request";
import { Project } from "types/projects";
import ProjectCRUDCard from "../ProjectCRUDCard";
import ProjectImg from "assets/img/projectsImg.svg";
import "./styles.css";

type ControlComponentsData = {
  activePage: number;
};

const ProjectCRUDList = () => {
  const [page, setPage] = useState<SpringPage<Project>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const getProjects = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/projects",
      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };

    makeBackendRequest(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="list-project-crud-flex">
      <div className="mt-4 list-project-crud-container base-card">
        <Link to="/admin/crud/create">
          <button className="btn btn-primary ">ADD</button>
        </Link>
        <div className="row">
          <div className="col-sm-12">
            {page?.content.map((item) => (
              <div key={item.id}>
                <ProjectCRUDCard project={item} onDelete={getProjects} />
              </div>
            ))}
          </div>
          <div className="list-pagination-container">
            <Pagination
              pageCount={page ? page.totalPages : 0}
              range={3}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <div className="projects-crud-img">
        <img src={ProjectImg} alt="" />
      </div>
    </div>
  );
};

export default ProjectCRUDList;
