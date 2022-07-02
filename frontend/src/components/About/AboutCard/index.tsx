import { AboutMe } from "types/about";
import "./styles.css";

type Props = {
  about: AboutMe;
};
const AboutCard = ({ about }: Props) => {
  return (
    <div className="about-card-crud">
      <img src={about.image} alt="" />
      <p>{about.content}</p>
    </div>
  );
};

export default AboutCard;
