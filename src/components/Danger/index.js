import React, { useEffect, useState } from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import io from "socket.io-client";

import api from "../../services/api";

import { Card } from "./styles";

const Danger = ({ approved, analyzed,disapproved }) => {
  const [dangers, setDangers] = useState([]);

  

  useEffect(() => {
    async function loadDanger() {
      const response = await api.get("/dangers");

      setDangers(response.data.docs);
    }

    loadDanger();
  }, []);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);

    socket.on("newRecord", (message) => {
      async function load() {
        const response = await api.get("/dangers");

        setDangers(response.data.docs);
        console.log(message);
      }

      load();
    });
  }, []);

  async function fileDanger(id) {
    var teste = window.prompt("Informe o motivo da reprovação do registro")
    
    await api.put(`/dangers/${id}`, {
      disapproved: true,
      analyzed: true,
      approved: false,
      disapprovedReason: teste
    });

    const response = await api.get("/dangers");

    setDangers(response.data.docs);

    toast.success("Registro reprovado com sucesso!", {
      autoClose: 3000,
    });
  }

  async function approve(id) {
    await api.put(`/dangers/${id}`, { 
      disapproved: false,
      analyzed: true,
      approved: true
     });

    const response = await api.get("/dangers");

    setDangers(response.data.docs);
    toast.success("Registro aprovado!", {
      autoClose: 3000,
    });
  }

  return (
    <>
      <ToastContainer />

      {dangers.map(
        (danger) =>
          danger.approved === approved && (
            <Card key={danger._id}>
              <div className="header">
                <div>
                  <strong>{danger.user.name}</strong>
                  <br />
                  <small>{danger.user.cpf}</small>
                </div>
                <small>{danger.createdAt}</small>
              </div>
              <img
                src={danger.image.url ? danger.image.url : null}
                alt={danger.location}
              />
              <div className="footer">
                <strong>{danger._id}</strong>
                <strong>{danger.location}</strong>
                <p>{danger.description}</p>
                <div>
                  {approved === true ? null : (
                    <button
                      className="checked"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Deseja realmente aprovar esse registro?`
                          )
                        )
                          approve(danger._id);
                      }}
                    >
                      <FiCheck />
                    </button>
                  )}

                  <button
                    className="delete"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Deseja realmente reprovar esse registro?`
                        )
                      )
                      fileDanger(danger._id);
                    }}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </Card>
          )
      )
      }

      {dangers.map(
        (danger) =>
          danger.analyzed === analyzed && (
            <Card key={danger._id}>
              <div className="header">
                <div>
                  <strong>{danger.user.name}</strong>
                  <br />
                  <small>{danger.user.cpf}</small>
                </div>
                <small>{danger.createdAt}</small>
              </div>
              <img
                src={danger.image.url ? danger.image.url : null}
                alt={danger.location}
              />
              <div className="footer">
                <strong>{danger._id}</strong>
                <strong>{danger.location}</strong>
                <p>{danger.description}</p>
                <div>
                  {approved === true ? null : (
                    <button
                      className="checked"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Deseja realmente aprovar esse registro?`
                          )
                        )
                          approve(danger._id);
                      }}
                    >
                      <FiCheck />
                    </button>
                  )}

                  <button
                    className="delete"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Deseja realmente reprovar esse registro?`
                        )
                      )
                      fileDanger(danger._id);
                    }}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </Card>
          )
      )
      }

      {dangers.map(
        (danger) =>
          danger.disapproved === disapproved && (
            <Card key={danger._id}>
              <div className="header">
                <div>
                  <strong>{danger.user.name}</strong>
                  <br />
                  <small>{danger.user.cpf}</small>
                </div>
                <small>{danger.createdAt}</small>
              </div>
              <img
                src={danger.image.url ? danger.image.url : null}
                alt={danger.location}
              />
              <div className="footer">
                <strong>{danger._id}</strong>
                <strong>{danger.location}</strong>
                <p>{danger.description}</p>
                <p style={{color: "red"}} >{danger.disapprovedReason}</p>
                <div>
                  {approved === true ? null : (
                    <button
                      className="checked"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Deseja realmente aprovar esse registro?`
                          )
                        )
                          approve(danger._id);
                      }}
                    >
                      <FiCheck />
                    </button>
                  )}
                </div>
              </div>
            </Card>
          )
      )
      }
    </>
  );
};

export default Danger;
