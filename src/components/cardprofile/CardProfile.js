import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import imgProfile from "../../assets/img/AvatarMaker (1).svg";
import imgProfilebg from "../../assets/img/bg-chris.jpg";
import "./cardprofile.css";
const CardProfile = () => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card-profile">
        <div className="img1">
          <img src={imgProfilebg} alt="" />
        </div>
        <div className="img2">
          <img src={imgProfile} alt="" />
        </div>
        <div className="main-text">
          <h2>Christian Lazo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptates quia illum ratione nobis velit deleniti, neque explicabo
            repudiandae expedita.
          </p>
        </div>
        <div className="socials">
          <FaFacebookF className="social-item fs-4 me-3" />
          <FaLinkedinIn className="social-item fs-4 me-3" />
          <FaGithub className="social-item fs-4" />
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
