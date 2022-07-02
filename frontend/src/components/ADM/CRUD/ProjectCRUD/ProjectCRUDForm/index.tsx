import { AxiosRequestConfig } from "axios";
import ADMNavbar from "components/ADM/ADMNavbar";
import Footer from "components/Footer";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Project } from "types/projects";
import { makeBackendRequest } from "utils/request";
import ProjectImg from "assets/img/projectForm.svg";

import "./styles.css";

type UrlParams = {
  projectId: string;
};

const ProjectCRUDForm = () => {
  const { projectId } = useParams<UrlParams>();

  const isEditing = projectId;

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Project>();

  useEffect(() => {
    if (isEditing) {
      makeBackendRequest({ url: `/projects/${projectId}` }).then((response) => {
        const project = response.data as Project;
        setValue("title", project.title);
        setValue("image", project.image);
        setValue("content", project.content);
        setValue("link", project.link);
        setValue("repository", project.repository);
      });
    }
  }, [isEditing, projectId, setValue]);

  const onSubmit = (formData: Project) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/projects/${projectId}` : `/projects`,
      data: data,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        history("/admin/crud");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    history("/admin/crud");
  };

  return (
    <>
      <ADMNavbar />
      <div className="project-form-crud-container">
        <div className="project-form-crud">
          <div className="adjust">
            <form onSubmit={handleSubmit(onSubmit)} className="form-crud">
              <input
                {...register("title", {
                  required: "Required field",
                })}
                type="text"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                placeholder="Title"
                name="title"
              />
              {errors.title && (
                <div className="invalid-feedback d-block">Required field</div>
              )}

              <input
                {...register("image", {
                  required: "Required field",
                })}
                type="text"
                className={`form-control base-input ${
                  errors.image ? "is-invalid" : ""
                }`}
                placeholder="Image"
                name="image"
              />
              {errors.image && (
                <div className="invalid-feedback d-block">Required field</div>
              )}

              <textarea
                {...register("content", {
                  required: "Required field",
                })}
                className={`form-control base-input ${
                  errors.content ? "is-invalid" : ""
                }`}
                placeholder="Description"
                name="content"
              />
              {errors.content && (
                <div className="invalid-feedback d-block">Required field</div>
              )}

              <input
                {...register("repository", {
                  required: "Required field",
                })}
                type="text"
                className={`form-control base-input ${
                  errors.repository ? "is-invalid" : ""
                }`}
                placeholder="Deploy"
                name="repository"
              />
              {errors.repository && (
                <div className="invalid-feedback d-block">Required field</div>
              )}

              <input
                {...register("link", {
                  required: "Required field",
                })}
                type="text"
                className={`form-control base-input ${
                  errors.link ? "is-invalid" : ""
                }`}
                placeholder="Repository"
                name="link"
              />
              {errors.link && (
                <div className="invalid-feedback d-block">Required field</div>
              )}
              <div className="form-button-container">
                <button className="btn btn-primary text-white">SAVE</button>
                <button
                  className="btn btn-danger text-white btn-form-cancel mt-4"
                  onClick={handleCancel}
                >
                  CANCEL
                </button>
              </div>
            </form>

            <div className="project-img-crud">
              <img src={ProjectImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <Footer />
      </div>
    </>
  );
};

export default ProjectCRUDForm;
