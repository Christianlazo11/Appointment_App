import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const Listar = () => {
  return (
    <div
      className="container"
      style={{ minHeight: "600px", marginTop: "6rem" }}
    >
      <h1 className="text-center py-5">Lista de Citas</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Número de Cita</th>
            <th>Coder</th>
            <th>Tema De Consulta</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Christian Lazo</td>
            <td>Php</td>
            <td>28/10/2020</td>
            <td>10:20 am</td>
            <td>
              <a href="">
                <FaPencilAlt />{" "}
              </a>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Listar;
