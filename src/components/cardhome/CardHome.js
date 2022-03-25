import React from "react";
import { BsCardList } from "react-icons/bs";
import "./cardhome.css";

const CardHome = ({ text }) => {
  return (
    <div className="col-12 col-sm-12 col-md-4 p-3">
      <div className="card d-flex flex-column align-items-center gap-3 bg-dark text-white py-5 mycard">
        <BsCardList className="display-1" />
        <span className="fs-5">{text}</span>
      </div>
    </div>
  );
};

export default CardHome;
