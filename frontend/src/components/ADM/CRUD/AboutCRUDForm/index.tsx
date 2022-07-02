import { AxiosRequestConfig } from "axios";
import ADMNavbar from "components/ADM/ADMNavbar";
import Footer from "components/Footer";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AboutMe } from "types/about";
import { makeBackendRequest } from "utils/request";
import AboutImg from "assets/img/aboutForm.svg";

import "./styles.css";

type UrlParams = {
  aboutId: string;
};
const AboutCRUDForm = () => {
  const { aboutId } = useParams<UrlParams>();

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AboutMe>();

  useEffect(() => {
    makeBackendRequest({ url: `/about/1` }).then((response) => {
      const about = response.data as AboutMe;
      setValue("content", about.content);
      setValue("image", about.image);
    });
  }, [aboutId, setValue]);

  const onSubmit = (formData: AboutMe) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: "PUT",
      url: `/about/1`,
      data: data,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        history("/about/list");
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
      <div className="about-form-crud-container">
        <div className="about-form-crud">
          <form onSubmit={handleSubmit(onSubmit)} className="about-crud">
            <input
              type="text"
              {...register("image", {
                required: "Required field",
              })}
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
        </div>
        <div>
          <img src={AboutImg} alt="" />
        </div>
      </div>

      <div className="bg-dark text-white">
        <Footer />
      </div>
    </>
  );
};

export default AboutCRUDForm;
