import ContactCRUDCard from "./ContactCRUDCard";
import ContactImg from "assets/img/contact.svg";
import "./styles.css";
import ADMNavbar from "components/ADM/ADMNavbar";

const ContactCRUD = () => {
  return (
    <>
      <ADMNavbar />
      <div className="contact-crud-container">
        <div className="container">
          <div className="contact-crud">
            <div className="contact-crud-card">
              <ContactCRUDCard />
            </div>
            <div className="contact-crud-img">
              <img src={ContactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCRUD;
