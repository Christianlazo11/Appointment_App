import React from "react";

const EditAppointment = () => {
  return (
    <div
      style={{ minHeight: "100vh", marginTop: "6rem", width: "20rem" }}
      class="d-flex mx-auto"
    >
      <div
        className=" container border border-2 border-secondary rounded-3 mx-auto 
        mb-5 px-5 pt-4 h-100"
      >
        <div className="col">
          <h1>Editar cita</h1>
          <form action="">
            <div className="row mb-3">
              <div className="col">
                <label for="name" className="form-label">
                  Nombre de coder
                </label>
                <input type="text" className="form-control" id="name"></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="name" className="form-label">
                  Tema de consulta
                </label>
                <textarea className="form-control" id="tema"></textarea>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="date" className="form-label">
                  Fecha consulta
                </label>
                <br />
                <input className="" type="date"></input>
                <br />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="date" className="form-label">
                  Hora consulta
                </label>
                <br />
                <input className="" type="time"></input>
                <br />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col">
                <button type="submit" className="btn btn-primary col-12">
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

export default EditAppointment;
