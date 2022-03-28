import React from "react";
import CardHome from "../components/cardhome/CardHome";
import CardProfile from "../components/cardprofile/CardProfile";

const Home = () => {
  return (
    <div style={{ minHeight: "600px", marginTop: "6rem" }}>
      <div className="container">
        <div className="row mb-4">
          <CardHome text="Lista De Citas" icon="list" link="list-appointment" />
          <CardHome
            text="Solicitar Cita"
            icon="hand"
            link="/create-appointment"
          />
          <CardHome
            text="Consultar Cita"
            icon="search"
            link="/create-appointment"
          />
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <CardProfile />
          <CardProfile />
        </div>
      </div>
    </div>
  );
};

export default Home;
