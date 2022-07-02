import { AxiosRequestConfig } from "axios";
import AboutCard from "components/About/AboutCard";
import ADMNavbar from "components/ADM/ADMNavbar";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import { AboutMe } from "types/about";
import { makeBackendRequest } from "utils/request";
import "./styles.css";

const AboutCRUDList = () => {
  const [abouts, setAbout] = useState<AboutMe[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: "/about",
    };

    makeBackendRequest(config).then((response) => {
      setAbout(response.data);
    });
  }, []);
  return (
    <div className="about-show">
      <ADMNavbar />
      {abouts.map((item) => (
        <div key={item.id}>
          <AboutCard about={item} />
        </div>
      ))}
      <div className="bg-dark text-white">
        <Footer />
      </div>
    </div>
  );
};

export default AboutCRUDList;
