import React, { useState } from 'react';

const EditAppointment = () => {


  const[form,setForm] = useState({});
  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  };

  
  

  return (


    <div style={{ minHeight: "100vh", marginTop: "6rem", width: "20rem" }} class="d-flex mx-auto">

      <div class=" container border border-2 border-secondary rounded-3 mx-auto 
        mb-5 px-5 pt-4 h-100">
        <div class="col">
          <h1>Editar cita</h1>
          <form action=''>
            <div class="row mb-3">
              <div class="col">
                <label htmlFor="name" class="form-label">Nombre de coder</label>

                <input 
                type="text" 
                class="form-control"
                id="name"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                />
                
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label htmlFor="tema" class="form-label">Tema de consulta</label>
                <textarea class="form-control"
                id="tema" 
                name="tema"
                value={form.tema}
                onChange={handleChange}
                />
              </div>
            </div>


            <div class="row mb-3">
              <div class="col">
                <label htmlFor="date" class="form-label">Fecha consulta</label>
                <br />
                <input class="" type="date"
                name='date'
                value={form.date}
                onChange={handleChange}
                />
                <br />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label htmlFor="date" class="form-label">Hora consulta</label>
                <br />
                <input class="" type="time"
                name='time'
                value={form.time}
                onChange={handleChange}
                />
                <br />
              </div>
            </div>

            <div class="row mb-5">
              <div class="col">
                <button type="submit" class="btn btn-primary col-12">Crear</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAppointment;
