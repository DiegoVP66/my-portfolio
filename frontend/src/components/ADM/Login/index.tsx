import { AuthContext } from "AuthContextData";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { requestBackendLogin } from "utils/request";
import { saveAuthData } from "utils/storage";
import { getTokenData } from "utils/token";

import "./styles.css";

type CredentialsDTO = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsDTO>();

  const [hasError, setHasError] = useState(false);
  const { setAuthContextData } = useContext(AuthContext);

  const history = useNavigate();

  const onSubmit = (formData: CredentialsDTO) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history("/admin/crud");
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  };

  return (
    <div className="login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">Erro ao tentar logar</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail Inválido",
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username ? "is-invalid" : ""
            }`}
            placeholder="E-mail"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required: "Campo obrigatório",
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? "is-invalid" : ""
            }`}
            placeholder="Password"
            name="password"
            autoComplete=""
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="login-submit">
          <button className="btn btn-danger text-white">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
