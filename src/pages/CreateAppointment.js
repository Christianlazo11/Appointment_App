import React from "react";

const CreateAppointment = () => {
  return (
    <div style={{ minHeight: "600px", marginTop: "6rem" }} class="container ">
      <h1>Crear cita</h1>
      <form action="">
        <label for="name" class="form-label">
          Nombre de coder
        </label>
        <input type="text" class="form-control" id="name"></input>

        <label for="name" class="form-label">
          Tema de consulta
        </label>
        <textarea class="form-control" id="tema"></textarea>

        <label for="date" class="form-label">
          Fecha consulta
        </label>
        <br />
        <input class="" type="date"></input>
        <br />
        <label for="date" class="form-label">
          Hora consulta
        </label>
        <br />
        <input class="" type="time"></input>
        <br />
        <button type="submit" class="btn btn-primary mt-3">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
