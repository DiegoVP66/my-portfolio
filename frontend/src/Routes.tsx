import AppComponent from "AppComponent";
import ADM from "components/ADM";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppComponent />} />
        <Route path="/auth/login" element={<ADM />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
