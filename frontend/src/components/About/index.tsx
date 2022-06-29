import ProfilePic from "assets/img/barba.jpg";
import Git from "assets/img/github.svg";
import In from "assets/img/linkedin.svg";
import "./styles.css";

const About = () => {
  return (
    <div id="about">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              minus aliquam. Vitae, unde. Quasi veritatis at temporibus ullam!
              Assumenda, totam! Quam magni amet iusto velit quas laudantium
              neque fuga ratione? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa eius explicabo fugiat illo reprehenderit.
              Molestias accusantium ipsum nemo, optio perferendis ab. Iure
              tempora beatae quam amet veritatis ducimus, consectetur at.
            </p>
          </div>
          <div className="img-profile-container">
            <img src={ProfilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
