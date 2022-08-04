import React, { useEffect, useState } from 'react';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { AiFillEye, AiOutlineCloudDownload } from 'react-icons/ai';

import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify';
import io from 'socket.io-client';

import api from '../../services/api';

import { ButtonDownload, Card } from './styles';
import generateCSV from '../generateCSV';

const Danger = ({ approved, analyzed, disapproved, history }) => {
  const [dangers, setDangers] = useState([]);

  useEffect(() => {
    async function loadDanger() {
      const response = await api.get('/dangers');

      setDangers(response.data.docs);
    }

    loadDanger();
  }, []);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);

    socket.on('newRecord', (message) => {
      async function load() {
        const response = await api.get('/dangers');

        setDangers(response.data.docs);
        console.log(message);
      }

      load();
    });
  }, []);

  async function fileDanger(id) {
    var teste = window.prompt(
      'Informe o motivo da reprovação do registro'
    );

    await api.put(`/dangers/${id}`, {
      disapproved: true,
      analyzed: true,
      approved: false,
      disapprovedReason: teste,
    });

    const response = await api.get('/dangers');

    setDangers(response.data.docs);

    toast.success('Registro reprovado com sucesso!', {
      autoClose: 3000,
    });
  }

  async function approve(id) {
    await api.put(`/dangers/${id}`, {
      disapproved: false,
      analyzed: true,
      approved: true,
    });

    const response = await api.get('/dangers');

    setDangers(response.data.docs);
    toast.success('Registro aprovado!', {
      autoClose: 3000,
    });
  }

  function printer(name, date, location, description, image, id) {
    history.push('/print', {
      name,
      date,
      location,
      description,
      image,
      id,
    });
  }

  let generateCSVData = dangers.filter((danger) => {
    if (danger.approved === approved) {
      return danger;
    }

    if (danger.analyzed === analyzed) {
      return danger;
    }

    if (danger.disapproved === disapproved) {
      return danger;
    }
  });

  return (
    <>
      <ToastContainer />

      <ButtonDownload
        onClick={() => {
          generateCSV(generateCSVData);
        }}
      >
        Baixar Planilha
        <span>
          <AiOutlineCloudDownload />
        </span>
      </ButtonDownload>

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

                <div className="box-date">
                  <small>
                    {moment(danger.createdAt).format('DD-MM-YYYY')}
                  </small>

                  {danger.resolved && (
                    <a
                      href={danger.imageResolved.url}
                      className="resolved"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resolvido
                    </a>
                  )}
                </div>
              </div>
              <a
                href={danger.image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={danger.image.url ? danger.image.url : null}
                  alt={danger.location}
                />
              </a>

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

                  {approved === true && (
                    <button
                      className="details"
                      onClick={() => {
                        printer(
                          danger.user.name,
                          danger.createdAt,
                          danger.location,
                          danger.description,
                          danger.image.url ? danger.image.url : '',
                          danger._id
                        );
                      }}
                    >
                      <AiFillEye />
                    </button>
                  )}
                </div>
              </div>
            </Card>
          )
      )}

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

                <div className="box-date">
                  <small>
                    {moment(danger.createdAt).format('DD-MM-YYYY')}
                  </small>

                  {danger.resolved && (
                    <a
                      href={danger.imageResolved.url}
                      className="resolved"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resolvido
                    </a>
                  )}
                </div>
              </div>
              <a
                href={danger.image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={danger.image.url ? danger.image.url : null}
                  alt={danger.location}
                />
              </a>
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
      )}

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
                <div className="box-date">
                  <small>
                    {moment(danger.createdAt).format('DD-MM-YYYY')}
                  </small>

                  {danger.resolved && (
                    <a
                      href={danger.imageResolved.url}
                      className="resolved"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resolvido
                    </a>
                  )}
                </div>
              </div>
              <a
                href={danger.image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={danger.image.url ? danger.image.url : null}
                  alt={danger.location}
                />
              </a>
              <div className="footer">
                <strong>{danger._id}</strong>
                <strong>{danger.location}</strong>
                <p>{danger.description}</p>
                <p style={{ color: 'red' }}>
                  {danger.disapprovedReason}
                </p>
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
      )}
    </>
  );
};

export default Danger;
