import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CreateAppointment = () => {

  const[form,setForm] = useState({});
  const handleChange = e =>{
    setForm({ 
      ...form,
      [e.target.name]:e.target.value,
    });
  };
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("El formulario fue enviado");

    let DataSend ={
      name:form.name,
      topic:form.topic,
      date:form.date,
      hour:form.hour
      currentTime:currentTime;
    }
  }

  
  const creatData = (data) =>{};

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

          <form  onSubmit={handleSubmit} creatData={creatData}>
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
                id="topic" 
                name="topic"
                value={form.topic}
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
                <label htmlFor="hour" className="form-label">
                  Hora consulta
                </label>
                <br />
                <input className="form-control" type="time"
                name='hour'
                value={form.hour}
                onChange={handleChange}
                />
                <br />
              </div>
            </div>

            <div className="row my-4">
              <div className="col">
                <div className="btn-group col-12 gap-5" role="group" aria-label="Basic example">
                  <button type="submit" className="btn btn-primary ">Crear</button>
                  <Link to={"/"} className="btn btn-danger">Cancelar</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
