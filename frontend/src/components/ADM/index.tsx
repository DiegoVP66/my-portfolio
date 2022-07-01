import Footer from "components/Footer";
import ADMNavbar from "./ADMNavbar";
import Login from "./Login";
import ADMImg from "assets/img/adm.svg";

import "./styles.css";

const ADM = () => {
  return (
    <div className="ADM">
      <ADMNavbar />
      <div className="adm-align">
        <div className="adm-container">
          <Login />
        </div>
        <div className="adm-logo">
          <img src={ADMImg} alt="" />
        </div>
      </div>
      <div className="adm-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ADM;
