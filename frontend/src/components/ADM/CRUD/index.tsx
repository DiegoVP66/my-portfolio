import Footer from "components/Footer";
import ADMNavbar from "../ADMNavbar";
import ProjectCRUDList from "./ProjectCRUD/ProjectCRUDList";

import "./styles.css";

const CRUD = () => {
  return (
    <div>
      <ADMNavbar />
      <ProjectCRUDList />
      <div className="crud-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CRUD;
