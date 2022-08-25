import React, { useEffect, useState } from 'react';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

import {
  AiFillEye,
  AiOutlineCloseCircle,
  AiOutlineCloudDownload,
  AiOutlineSearch,
} from 'react-icons/ai';

import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify';
import io from 'socket.io-client';

import Loader from '../Loader';

import api from '../../services/api';

import {
  BoxInpuDate,
  BoxInputsDate,
  BoxLoader,
  ButtonDownload,
  Card,
  ModalDescription,
  ModalShowResolved,
} from './styles';

import generateCSV from '../generateCSV';
import { useCompanyContext } from '../../contexts/CompanyContext';
import { useTypeDangerContext } from '../../contexts/TypeDangerContext';

const Danger = ({ history }) => {
  const { company } = useCompanyContext();
  const { typeDanger } = useTypeDangerContext();

  const [dangers, setDangers] = useState([]);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [search, setSearch] = useState(false);

  const [dateInitialChecks, setDateInitialChecks] = useState('');
  const [dateFinalChecks, setDateFinalChecks] = useState('');

  const [loading, setLoading] = useState(true);
  const [activeModalDescription, setActiveModalDescription] =
    useState(false);
  const [activeModalDetailsResolved, setActiveModalDetailsResolved] =
    useState(false);

  const [
    idDangerShowModalDescription,
    setIdDangerShowModalDescription,
  ] = useState('');

  useEffect(() => {
    async function loadDanger() {
      setLoading(true);
      const response = await api.get(
        `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
      );

      setDangers(response.data);
      setLoading(false);
    }

    if (company) {
      loadDanger();
    }
  }, [dateInitialChecks, dateFinalChecks, company]);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);

    socket.on('newRecord', (message) => {
      async function load() {
        const response = await api.get(
          `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
        );

        setDangers(response.data);
        console.log(message);
      }

      load();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fileDanger(id) {
    var message = window.prompt(
      'Informe o motivo da reprovação do registro'
    );

    await api.put(`/dangers/${id}`, {
      disapproved: true,
      analyzed: true,
      approved: false,
      disapprovedReason: message,
    });

    const response = await api.get(
      `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
    );

    setDangers(response.data);

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

    const response = await api.get(
      `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
    );

    setDangers(response.data);
    toast.success('Registro aprovado!', {
      autoClose: 3000,
    });
  }

  function printer(
    name,
    date,
    location,
    description,
    image,
    id,
    resolvedApproved,
    imageResolved
  ) {
    history.push('/print', {
      name,
      date,
      location,
      description,
      image,
      id,
      resolvedApproved,
      imageResolved,
    });
  }

  let filterDanger = dangers.filter((danger) => {
    if (danger.approved === typeDanger.approved) {
      return danger;
    }

    if (danger.analyzed === typeDanger.analyzed) {
      return danger;
    }

    if (danger.disapproved === typeDanger.disapproved) {
      return danger;
    }

    return '';
  });

  function checksDates() {
    if (initialDate.length !== 10 || finalDate.length !== 10) {
      return;
    }

    setDateInitialChecks(initialDate);
    setDateFinalChecks(finalDate);

    setSearch(true);
  }

  function coloseSearch() {
    setFinalDate('');
    setDateFinalChecks('');
    setInitialDate('');
    setDateFinalChecks('');
    setSearch(false);
  }

  function showModalDescription(idRegister) {
    setActiveModalDescription(true);
    setIdDangerShowModalDescription(idRegister);
  }

  function hiddenModalDescription() {
    setActiveModalDescription(false);
  }

  function showModalDetailsResolved(idRegister) {
    setActiveModalDetailsResolved(true);
    setIdDangerShowModalDescription(idRegister);
  }

  function hiddenModalDetailsResolved() {
    setActiveModalDetailsResolved(false);
  }

  async function approveResolvedDanger(id) {
    if (
      window.confirm(
        `Deseja realmente aprovar esse registro de resolvido?`
      )
    ) {
      await api.put(`/dangers/${id}`, {
        resolvedApproved: 'APPROVAD',
      });

      const response = await api.get(
        `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
      );

      setDangers(response.data);

      toast.success('Registro resolvido aprovado com sucesso!', {
        autoClose: 3000,
      });
    }
  }

  async function disapprovedResolvedDanger(id) {
    if (
      window.confirm(
        `Deseja realmente reprovar esse registro de resolvido?`
      )
    ) {
      await api.put(`/dangers/${id}`, {
        resolvedApproved: 'DISAPPROVED',
      });

      const response = await api.get(
        `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
      );

      setDangers(response.data);

      toast.success('Registro resolvido reprovado com sucesso!', {
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <BoxInputsDate>
        <strong>
          Registros <br /> {filterDanger.length}
        </strong>
        <BoxInpuDate>
          <input
            className="date"
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
            type="date"
          />
        </BoxInpuDate>

        <BoxInpuDate>
          <input
            className="date"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
            type="date"
          />
        </BoxInpuDate>

        <button
          className="search"
          onClick={() => {
            checksDates();
          }}
        >
          <AiOutlineSearch color="#fff" />
        </button>

        {search && (
          <button
            className="excluir"
            onClick={() => {
              coloseSearch();
            }}
          >
            <AiOutlineCloseCircle color="#fff" />
          </button>
        )}
      </BoxInputsDate>

      <ButtonDownload
        onClick={() => {
          generateCSV(filterDanger);
        }}
      >
        Baixar Planilha
        <span>
          <AiOutlineCloudDownload />
        </span>
      </ButtonDownload>

      {loading ? (
        <BoxLoader>
          <Loader />
        </BoxLoader>
      ) : (
        filterDanger.map((danger) => (
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
                  <p
                    className={
                      (danger.resolvedApproved === 'ANALYSIS' &&
                        'analysis') ||
                      (danger.resolvedApproved === 'APPROVAD' &&
                        'resolved') ||
                      (danger.resolvedApproved === 'DISAPPROVED' &&
                        'disapproved')
                    }
                    onMouseOver={() => {
                      showModalDetailsResolved(danger._id);
                    }}
                    onMouseOut={() => {
                      hiddenModalDetailsResolved();
                    }}
                  >
                    Resolvido
                  </p>
                )}

                {String(idDangerShowModalDescription) ===
                  String(danger._id) &&
                  danger.imageResolved && (
                    <ModalShowResolved
                      active={activeModalDetailsResolved}
                      onMouseOver={() => {
                        showModalDetailsResolved(danger._id);
                      }}
                      onMouseOut={() => {
                        hiddenModalDetailsResolved();
                      }}
                    >
                      {danger.resolvedApproved === 'ANALYSIS' ||
                      danger.resolvedApproved === 'DISAPPROVED' ? (
                        <AiFillCheckCircle
                          className="approved"
                          onClick={() => {
                            approveResolvedDanger(danger._id);
                          }}
                        />
                      ) : (
                        ''
                      )}

                      <a
                        href={
                          danger.resolved
                            ? danger.imageResolved.url
                            : '#'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view"
                      >
                        <AiFillEye />
                      </a>

                      {danger.resolvedApproved !== 'DISAPPROVED' && (
                        <AiFillCloseCircle
                          className="delete"
                          onClick={() => {
                            disapprovedResolvedDanger(danger._id);
                          }}
                        />
                      )}
                    </ModalShowResolved>
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
              <strong
                className="location"
                onMouseOver={() => {
                  showModalDescription(danger._id);
                }}
              >
                {danger.location}
              </strong>
              <p
                onMouseOver={() => {
                  showModalDescription(danger._id);
                }}
                className="short_description "
              >
                {danger.description}
              </p>

              {String(idDangerShowModalDescription) ===
                String(danger._id) && (
                <ModalDescription
                  active={activeModalDescription}
                  onMouseOver={() => {
                    showModalDescription(danger._id);
                  }}
                  onMouseOut={() => {
                    hiddenModalDescription();
                  }}
                >
                  <strong>{danger.location}</strong>

                  <p>{danger.description}</p>
                </ModalDescription>
              )}

              <div>
                {typeDanger.approved === true ? null : (
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

                {typeDanger.approved === true && (
                  <>
                    <button
                      className="details"
                      onClick={() => {
                        printer(
                          danger.user.name,
                          danger.createdAt,
                          danger.location,
                          danger.description,
                          danger.image.url ? danger.image.url : '',
                          danger._id,
                          danger.resolvedApproved,
                          danger.imageResolved
                            ? danger.imageResolved.url
                            : ''
                        );
                      }}
                    >
                      <AiFillEye />
                    </button>

                    <button
                      className="details"
                      onClick={() => {
                        printer(
                          '',
                          danger.createdAt,
                          danger.location,
                          danger.description,
                          danger.image.url ? danger.image.url : '',
                          danger._id,
                          danger.resolvedApproved,
                          danger.imageResolved
                            ? danger.imageResolved.url
                            : ''
                        );
                      }}
                    >
                      <span role="img" aria-label="emoji name">
                        🤫
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))
      )}
    </>
  );
};

export default Danger;
