import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getDataAppointment } from "../services/AppointmentService";
import Loader from "../components/loader/Loader";

const Listar = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataAppointment()
      .then((datas) => {
        setData(datas);
        // setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return loading ? (
    <Loader />
  ) : (
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
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body py-3">Desea Eliminar Esta Cita</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary text-white"
                data-bs-dismiss="modal"
                onClick={() => {
                  navigate("/");
                }}
              >
                Si
              </button>
              <button
                type="button"
                className="btn btn-secondary"
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
