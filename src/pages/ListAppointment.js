import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Listar = () => {
  let navigate = useNavigate();
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
            <th>Eliminar</th>
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
              <Link to="/edit-appointment" className="btn">
                <FaPencilAlt />{" "}
              </Link>{" "}
            </td>
            <td>
              <button
                type="button"
                className="btn bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body py-3">Desea Eliminar Esta Cita</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary text-white"
                data-bs-dismiss="modal"
                onClick={() => {
                  navigate("/");
                }}
              >
                Si
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listar;
