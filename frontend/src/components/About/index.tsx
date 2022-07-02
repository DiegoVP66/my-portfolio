import Git from "assets/img/github.svg";
import In from "assets/img/linkedin.svg";
import { AboutMe } from "types/about";
import "./styles.css";

type Props = {
  about: AboutMe;
};

const About = ({ about }: Props) => {
  return (
    <div className="about-container container">
      <div className="content-container">
        <div className="social-media base-card">
          <a
            href="https://github.com/DiegoVP66"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-v-212647212/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={In} alt="" />
          </a>
        </div>
        <div className="about-content">
          <h1>Sobre</h1>
          <p>{about.content}</p>
        </div>
        <div className="img-profile-container">
          <img src={about.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
