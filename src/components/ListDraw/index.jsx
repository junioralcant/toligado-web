import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

import api from '../../services/api';

import { Card, Button, SubCard, BoxLoader } from './styles';
import Loader from '../Loader';
import { useCompanyContext } from '../../contexts/CompanyContext';

const ListDraw = () => {
  const { company } = useCompanyContext();

  const [draws, setDraws] = useState([]);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDraw() {
      setLoading(true);
      const response = await api.get(`/draws?company=${company._id}`);

      setDraws(response.data);
      setLoading(false);
    }

    if (company) {
      loadDraw();
    }
  }, [company]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadUser();
  }, []);

  async function destroy(id) {
    await api.delete(`/draws/${id}`);

    const response = await api.get(`/draws?company=${company._id}`);

    setDraws(response.data);

    toast.success('Sorteio excluído com sucesso!', {
      autoClose: 3000,
    });
  }

  async function HandlerButtonDraw() {
    try {
      await api.post(`/draws?company=${company._id}`);

      const response = await api.get(`/draws?company=${company._id}`);

      setDraws(response.data);

      toast.success('Sorteio realizado com sucesso!', {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response.data.error, {
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <ToastContainer />

      {loading && (
        <BoxLoader>
          <Loader />
        </BoxLoader>
      )}

      <Button
        onClick={() => {
          if (window.confirm(`Deseja realmente realizar um sorteio?`))
            HandlerButtonDraw();
        }}
      >
        Realizar Sorteio
      </Button>

      {draws.map((draw) => {
        const date = moment(draw.createdAt).format('DD-MM-YYYY');

        return (
          <>
            <Card>
              <strong>{date}</strong>
              <br />
              {draw.idsDraws.map((ids) => {
                return (
                  <>
                    {ids.recordId.resolvedApproved === 'APPROVAD' && (
                      <small className="resolved">Resolvido</small>
                    )}

                    <SubCard>
                      <div>
                        <strong>{ids.recordId._id}</strong>
                        <br />
                        {users.map((user) => {
                          if (user._id === ids.recordId.user) {
                            return (
                              <div key={user._id}>
                                <small>{user.name}</small>
                                <br />
                                <small>CPF: {user.cpf}</small>
                                <br />
                              </div>
                            );
                          }
                          return '';
                        })}
                        <br />
                      </div>
                    </SubCard>
                  </>
                );
              })}
              <div className="footer">
                <button
                  className="delete"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Deseja realmente deletar esse sorteio?`
                      )
                    )
                      destroy(draw._id);
                  }}
                >
                  <FiTrash2 />
                </button>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default ListDraw;
