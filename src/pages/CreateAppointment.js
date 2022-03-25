import React, { useState } from "react";

const CreateAppointment = () => {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const setData = (e) => {
    e.preventDefault();
    console.log("Enviando Datos ....");
  };

  console.log(typeof name);
  console.log(typeof topic);
  console.log(typeof date);
  console.log(typeof hour);

  return (
    <div
      style={{ minHeight: "100vh", marginTop: "6rem", width: "20rem" }}
      className="d-flex mx-auto w-100"
    >
      <div
        className=" container mx-auto 
        mb-5 px-5 pt-4 h-100 row d-flex justify-content-center align-items-center"
      >
        <div className="col-12 col-md-8 col-lg-6 card p-4 border-lg bg-dark text-white">
          <h1 className="text-center">Crear cita</h1>
          <form
            onSubmit={(e) => {
              setData(e);
            }}
          >
            <div className="row mb-3">
              <div className="col">
                <label for="name" className="form-label">
                  Nombre de coder
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="name" className="form-label">
                  Tema de consulta
                </label>
                <textarea
                  className="form-control"
                  id="tema"
                  onChange={(e) => setTopic(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="date" className="form-label">
                  Fecha consulta
                </label>
                <br />
                <input
                  className="form-control"
                  type="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  required
                ></input>
                <br />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="date" className="form-label">
                  Hora consulta
                </label>
                <br />
                <input
                  className="form-control"
                  type="time"
                  onChange={(e) => {
                    setHour(e.target.value);
                  }}
                  required
                ></input>
                <br />
              </div>
            </div>

            <div className="row my-4">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary text-white fs-5 col-12"
                >
                  Crear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
