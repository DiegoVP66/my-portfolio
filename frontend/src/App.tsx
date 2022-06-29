import About from "components/About";
import Contact from "components/Contact";
import Navbar from "components/Navbar";
import Pagination from "components/Pagination";
import Projects from "components/Projects";
import Home from "pages/Home";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import "./App.css";

export const ThemeContext = createContext({} || null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div id="home"></div>
        <Navbar />
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Home />

        <About />

        <div className="container">
          <div className="style-border">
            <h1 className="text-white mt-4">Projects</h1>
          </div>
          <Projects
            title="DsSales"
            image="https://user-images.githubusercontent.com/84286836/154867839-6c5b7642-38e4-4506-a8ec-d76a3e400ec7.png"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
        exercitationem quae deleniti consequuntur facere nemo qui error
        accusantium nobis ipsum adipisci optio neque officia ea quidem, officiis
        voluptatem animi laudantium!"
            link="https://github.com/DiegoVP66/sales-dashboard"
          />
        </div>
        <div className="row pagination-container">
          <Pagination pageCount={3} range={3} />
        </div>

        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
