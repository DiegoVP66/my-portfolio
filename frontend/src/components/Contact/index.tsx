import "./styles.css";
const Contact = () => {
  return (
    <div className="form-container container">
      <div className="contact-title">
        <label> Entre em contato!</label>
      </div>
      <div className="form-align">
        <form className="form">
          <div className="">
            <input
              className={`form-control base-input
              }`}
              type="text"
              placeholder="Nome"
              name="name"
            />
            <div className="invalid-feedback d-block"></div>
          </div>
          <div className="">
            <input
              className={`form-control base-input 
              }`}
              type="text"
              placeholder="E-mail"
              name="email"
            />
            <div className="invalid-feedback d-block"></div>
          </div>

          <div className="message-box">
            <textarea
              className={`form-control base-input 
              }`}
              name="message"
              placeholder="Mensagem"
            />
            <div className="invalid-feedback d-block"></div>
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
