import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

import api from '../../services/api';

import { Card, Button, SubCard } from './styles';

const ListDraw = () => {
  const [draws, setDraws] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadDraw() {
      const response = await api.get('/draws');

      setDraws(response.data.docs);
    }

    loadDraw();
  }, []);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadUser();
  }, []);

  async function destroy(id) {
    await api.delete(`/draws/${id}`);

    const response = await api.get('/draws');

    setDraws(response.data.docs);

    toast.success('Sorteio excluído com sucesso!', {
      autoClose: 3000,
    });
  }

  async function HandlerButtonDraw() {
    try {
      await api.post('/draws');

      const response = await api.get('/draws');

      setDraws(response.data.docs);

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
                  <SubCard>
                    <div>
                      <strong>{ids.recordId._id}</strong>
                      <br />
                      {users.map((user) => {
                        if (user._id === ids.recordId.user) {
                          return (
                            <>
                              <small>{user.name}</small>
                              <br />
                              <small>CPF: {user.cpf}</small>
                              <br />
                            </>
                          );
                        }
                      })}
                      <br />
                    </div>
                  </SubCard>
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
