import About from "components/About";
import Contact from "components/Contact";
import Navbar from "components/Navbar";
import Pagination from "components/Pagination";
import Projects from "components/Projects";
import Home from "pages/Home";
import { createContext, useCallback, useEffect, useState } from "react";
import Mail from "assets/img/mail.svg";
import ReactSwitch from "react-switch";
import "./App.css";
import Footer from "components/Footer";
import { SpringPage } from "types/spring";
import { Project } from "types/projects";
import { AxiosRequestConfig } from "axios";
import { makeBackendRequest } from "utils/request";
import { AboutMe } from "types/about";
import "react-toastify/dist/ReactToastify.css"; // import first
import { ToastContainer } from "react-toastify";
import CardLoader from "components/CardLoader";
import ProjectLoader from "components/ProjectLoader";

/* Pagination active page && context */
export const ThemeContext = createContext({} || null);
type ControlComponentsData = {
  activePage: number;
};

function App() {
  /* Theme config */
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  /*------------------------------------------------------------*/

  /*------------------------------------------------------------*/
  /* Project config */
  const [page, setPage] = useState<SpringPage<Project>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  /* Pagination function */
  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  /* Project GET method */
  const getProjects = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/projects`,

      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };
    setIsLoading(true);
    makeBackendRequest(config)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [controlComponentsData]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);
  /*------------------------------------------------------------*/

  /* About config */
  const [abouts, setAbout] = useState<AboutMe[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: "/about",
    };

    makeBackendRequest(config).then((response) => {
      setAbout(response.data);
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ToastContainer />
      <div className="App" id={theme}>
        {/* Home id link */}
        <div id="home"></div>

        {/* Navbar section */}
        <Navbar />

        {/* Switch section */}
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        {/* About id link */}
        <div id="about" className="mt-4"></div>

        {/* Home section */}
        <Home />

        {/* About section */}
        {isLoading ? (
          <div>
            <CardLoader />
            <span>Loading...</span>
          </div>
        ) : (
          abouts?.map((about) => (
            <div key={about.id}>
              <About about={about} />
            </div>
          ))
        )}

        {/* Project section */}
        <div id="projects"></div>
        <div className="container">
          <div className="style-border">
            <h1 className="text-white mt-4 pt-5">Projects</h1>
          </div>
          {isLoading ? (
            <div>
              <ProjectLoader />
            </div>
          ) : (
            page?.content.map((project) => (
              <div key={project.id}>
                <Projects project={project} />
              </div>
            ))
          )}
        </div>
        {/* Pagination section */}
        <div className="row pagination-container">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
        {/* Contact section */}
        <div className="app-form mt-4">
          <div className="mt-4">
            <Contact />
          </div>
          <div className="app-img">
            <img src={Mail} alt="" />
          </div>

          {/* Contact link */}
          <div id="contact"></div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
