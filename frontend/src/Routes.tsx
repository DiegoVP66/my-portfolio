import AppComponent from "AppComponent";
import ADM from "components/ADM";
import CRUD from "components/ADM/CRUD";
import AboutCRUDForm from "components/ADM/CRUD/AboutCRUDForm";
import AboutCRUDList from "components/ADM/CRUD/AboutCRUDList";
import ContactCRUD from "components/ADM/CRUD/ContactCRUD";
import ProjectCRUDForm from "components/ADM/CRUD/ProjectCRUD/ProjectCRUDForm";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "utils/auth";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppComponent />} />

        {!isAuthenticated() ? (
          <Route path="/admin/auth/login" element={<ADM />} />
        ) : (
          <Route
            path="/admin/auth/login"
            element={<Navigate to="/admin/crud" />}
          />
        )}

        {isAuthenticated() ? (
          <Route path="/admin/crud" element={<CRUD />} />
        ) : (
          <Route
            path="/admin/crud"
            element={<Navigate to="/admin/auth/login" />}
          />
        )}

        {isAuthenticated() ? (
          <Route path="/admin/crud/create" element={<ProjectCRUDForm />} />
        ) : (
          <Route
            path="/admin/crud/create"
            element={<Navigate to="/admin/auth/login" />}
          />
        )}
        {isAuthenticated() ? (
          <Route path="/admin/crud/:projectId" element={<ProjectCRUDForm />} />
        ) : (
          <Route
            path="/admin/crud/:projectId"
            element={<Navigate to="/admin/auth" />}
          />
        )}

        {isAuthenticated() ? (
          <Route path="/contact" element={<ContactCRUD />} />
        ) : (
          <Route
            path="/contact"
            element={<Navigate to="/admin/auth/login" />}
          />
        )}
        {isAuthenticated() ? (
          <Route path="/about" element={<AboutCRUDForm />} />
        ) : (
          <Route path="/about" element={<Navigate to="/admin/auth/login" />} />
        )}
        {isAuthenticated() ? (
          <Route path="/about/list" element={<AboutCRUDList />} />
        ) : (
          <Route
            path="/about/list"
            element={<Navigate to="/admin/auth/login" />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
