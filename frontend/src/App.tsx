import Navbar from "components/Navbar";
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
        <Navbar />
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
