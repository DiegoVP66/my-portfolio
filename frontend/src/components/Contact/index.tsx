import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ContactMe } from "types/contact";
import { makeBackendRequest } from "utils/request";
import "./styles.css";
const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactMe>();

  const onSubmit = (formData: ContactMe) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: "POST",
      url: `/contacts`,
      data: data,
    };

    makeBackendRequest(config)
      .then(() => {
        toast.info("Sua mensagem foi enviada com sucesso, obrigado!")
        console.log("Mensagem enviada com sucesso!");
        setValue("message", "");
        setValue("name", "");
        setValue("email", "");
      })
      .catch(() => {
        toast.error("Erro ao enviar a mensagem!Tente novamente...");
      });
  };

  return (
    <div className="form-container container">
      <div className="contact-title">
        <label> Entre em contato!</label>
      </div>
      <div className="form-align">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              {...register("name", {
                required: "Campo obrigatório",
              })}
              className={`form-control base-input ${
                errors.name ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="Nome"
              name="name"
            />
            <div className="invalid-feedback d-block">
              {errors.name?.message}
            </div>
          </div>
          <div className="">
            <input
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              className={`form-control base-input ${
                errors.email ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="E-mail"
              name="email"
            />
            <div className="invalid-feedback d-block">
              {errors.email?.message}
            </div>
          </div>

          <div className="message-box">
            <textarea
              {...register("message", {
                required: "Campo obrigatório",
              })}
              className={`form-control base-input ${
                errors.email ? "is-invalid" : ""
              }`}
              name="message"
              placeholder="Mensagem"
            />
            <div className="invalid-feedback d-block">
              {errors.message?.message}
            </div>
          </div>
          <div className="btn-adjust">
            <div className="btn-container">
              <button className="btn-register">ENVIAR</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
