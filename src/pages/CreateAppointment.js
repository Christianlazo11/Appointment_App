import React from "react";

const CreateAppointment = () => {
  return (
    <div
      style={{ minHeight: "100vh", marginTop: "6rem", width: "20rem" }}
      class="d-flex mx-auto"
    >
      <div
        class=" container border border-2 border-secondary rounded-3 mx-auto 
        mb-5 px-5 pt-4 h-100"
      >
        <div class="col">
          <h1>Crear cita</h1>
          <form action="">
            <div class="row mb-3">
              <div class="col">
                <label for="name" class="form-label">
                  Nombre de coder
                </label>
                <input type="text" class="form-control" id="name"></input>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label for="name" class="form-label">
                  Tema de consulta
                </label>
                <textarea class="form-control" id="tema"></textarea>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label for="date" class="form-label">
                  Fecha consulta
                </label>
                <br />
                <input class="" type="date"></input>
                <br />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label for="date" class="form-label">
                  Hora consulta
                </label>
                <br />
                <input class="" type="time"></input>
                <br />
              </div>
            </div>

            <div class="row mb-5">
              <div class="col">
                <button type="submit" class="btn btn-primary col-12">
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
