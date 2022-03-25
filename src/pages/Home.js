import React from "react";
import { BsCardList } from "react-icons/bs";
import CardHome from "../components/cardhome/CardHome";

const Home = () => {
  return (
    <div style={{ minHeight: "600px", marginTop: "6rem" }}>
      <div className="container">
        <div className="row">
          <CardHome text="Lista De Citas" />
          <CardHome text="Solicitar Cita" />
          <CardHome text="Consultar Cita" />
        </div>
      </div>
    </div>
  );
};

export default Home;
