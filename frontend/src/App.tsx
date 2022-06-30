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

export const ThemeContext = createContext({} || null);

type ControlComponentsData = {
  activePage: number;
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [page, setPage] = useState<SpringPage<Project>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });
  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const getProjects = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/projects`,

      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };

    makeBackendRequest(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div id="home"></div>
        <Navbar />
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div id="about" className="mt-4"></div>
        <Home />
        <About />
        <div id="projects"></div>
        <div className="container">
          <div className="style-border">
            <h1 className="text-white mt-4 pt-5">Projects</h1>
          </div>
          <div>
            {page?.content.map((item) => (
              <div key={item.id}>
                <Projects project={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="row pagination-container">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
        <div className="app-form mt-4">
          <div className="mt-4">
            <Contact />
          </div>
          <div className="app-img">
            <img src={Mail} alt="" />
          </div>
          <div id="contact"></div>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
