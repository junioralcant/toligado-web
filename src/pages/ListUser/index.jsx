/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import {useEffect, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import api from '../../services/api';
import SideBar from '../../components/SideBar';
import {Container, Header, Table} from './styles';
import {useCompanyContext} from '../../contexts/CompanyContext';
import {user} from '../../services/auth';

export function ListUser() {
  const {company} = useCompanyContext();
  const userLogged = user();

  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [userNameFilter, setUserNameFilter] = useState('');

  async function loadUsers() {
    const response = await api.get('/users');
    if (userNameFilter) {
      const usersFiltered = response.data.filter((user) =>
        user.name.match(new RegExp(userNameFilter, 'i'))
      );

      if (!userLogged.responsableFor) {
        setUsers(usersFiltered);
      } else {
        const filterUserCompany = usersFiltered.filter(
          (user) =>
            String(user.belongsCompany?._id) === String(company._id)
        );

        setUsers(filterUserCompany);
      }
    } else {
      if (company) {
        const filterUserCompany = response.data.filter(
          (user) =>
            String(user.belongsCompany?._id) === String(company._id)
        );
        setUsers(filterUserCompany);
      } else {
        setUsers(response.data);
      }
    }
  }

  useEffect(() => {
    loadUsers();
  }, [userNameFilter]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/companies');

      setCompanies(response.data);
    }

    loadUsers();
  }, [userNameFilter]);

  async function updateCompany(idUser, idCompany) {
    if (confirm('Deseja realmente alterar Empresa desse usuário?')) {
      await api.put(`/users/${idUser}`, {
        belongsCompany: idCompany,
      });
      loadUsers();
      toast.success('Empresa alterada com sucesso!', {
        autoClose: 4000,
      });
    }
  }

  async function updateBlockedUser(idUser, blockedUser) {
    if (
      confirm(
        'Deseja realmente alterar o status de Bloqueado desse usuário?'
      )
    ) {
      await api.put(`/users/${idUser}`, {
        blockedUser,
      });
      loadUsers();
      toast.success('Empresa alterada com sucesso!', {
        autoClose: 4000,
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <SideBar />
      <Container>
        <Header>
          <div>
            <input
              placeholder="filtrar por nome"
              onChange={(e) => setUserNameFilter(e.target.value)}
            />
          </div>
        </Header>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Empresa</th>
              <th>Bloqueado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.cpf}</td>
                <td>
                  <select
                    onChange={(e) =>
                      updateCompany(user._id, e.target.value)
                    }
                    value={user.belongsCompany?._id}
                    disabled={userLogged.responsableFor}
                  >
                    {companies.map((company) => (
                      <option value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    onChange={(e) =>
                      updateBlockedUser(user._id, e.target.value)
                    }
                    value={user.blockedUser}
                    disabled={userLogged.responsableFor}
                  >
                    <option value={false}>Ativo</option>
                    <option value={true}>Bloqueado</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
