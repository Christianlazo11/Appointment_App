import React, { useState } from 'react';
import { Link } from "react-router-dom";
const EditAppointment = () => {


  const[form,setForm] = useState({});
  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  };

  
  

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
          <h1 className="text-center">Editar cita</h1>
          <form action="">
            <div className="row mb-3">
              <div className="col">
                  <label htmlFor="name" className="form-label">
                    Nombre de coder
                  </label>
                  <input
                  type="text" 
                  className="form-control"
                  id="name"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Tema de consulta
                </label>
                <textarea className="form-control"
                id="tema" 
                name="tema"
                value={form.tema}
                onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="date" className="form-label">
                  Fecha consulta
                </label>
                <br />
                <input className="form-control" type="date"
                name='date'
                value={form.date}
                onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="date" className="form-label">
                  Hora consulta
                </label>
                <br />
                <input className="form-control" type="time"
                name='time'
                value={form.time}
                onChange={handleChange}
                />
                <br />
              </div>
            </div>

            <div className="row my-4">
              <div className="col">
                <div className="btn-group col-12 gap-5" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-primary ">Editar</button>
                
                  <Link to={"/list-appointment"} className="btn btn-danger">Cancelar</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAppointment;
