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
        }, 1000);
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
      <button className="my-2 btn btn-primary">
        <Link
          to="/create-appointment"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Crear Cita{" "}
        </Link>
      </button>
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.topic}</td>
              <td>{item.date}</td>
              <td>{item.hour}</td>
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
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content p-2">
                      <div className="modal-body py-3">
                        <span className="fs-5">Desea Eliminar Esta Cita</span>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger text-white"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listar;
