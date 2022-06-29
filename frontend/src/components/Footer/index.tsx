import "./styles.css";
const Footer = () => {
  return (
    <div className="foot">
      <footer className="text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/dvpdev/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/diego-v-212647212/"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/DiegoVP66"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          © 2022
          <span> vp.diego28@gmail.com</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
