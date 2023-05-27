import React, {useState, useEffect} from 'react';
import {AiOutlineUser} from 'react-icons/ai';

import SideBar from '../../components/SideBar';
import {
  Container,
  Button,
  Content,
  Column,
  Girl,
  Avatar,
  Title,
} from './styles';

import api from '../../services/api';

import girl from '../../assets/girl.png';
import {useCompanyContext} from '../../contexts/CompanyContext';
import {user} from '../../services/auth';

const Home = ({history}) => {
  const userLogged = user();
  const [companies, setCompanies] = useState([]);
  const [usersAmount, setUsersAmount] = useState(0);

  const {setCompanyDate} = useCompanyContext();
  useEffect(() => {
    async function loadEmpaty() {
      const response = await api.get('/companies');
      setCompanies(response.data);
    }

    loadEmpaty();
  }, []);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users/');
      setUsersAmount(response.data.length);
    }

    loadUsers();
  }, []);

  function navigateToUserList() {
    history.push('/list-users');
  }

  return (
    <>
      <SideBar page="dashboard" />
      <Container>
        <Title>Registro</Title>
        <Content>
          <Column>
            {companies.map((company) =>
              !userLogged.responsableFor ? (
                <Button
                  key={company._id}
                  analysis
                  onClick={() => {
                    setCompanyDate(company);
                    history.push('/home');
                  }}
                >
                  <div>
                    <div>
                      <p>{company.name}</p>
                    </div>

                    <Avatar src={company.avatar.url} />
                  </div>
                </Button>
              ) : (
                company._id === userLogged.responsableFor && (
                  <Button
                    key={company._id}
                    analysis
                    onClick={() => {
                      setCompanyDate(company);
                      history.push('/home');
                    }}
                  >
                    <div>
                      <div>
                        <p>{company.name}</p>
                      </div>

                      <Avatar src={company.avatar.url} />
                    </div>
                  </Button>
                )
              )
            )}

            {!userLogged.responsableFor && (
              <Button download onClick={navigateToUserList}>
                <div>
                  <div>
                    <strong>{usersAmount}</strong>
                    <p>Usuários</p>
                  </div>

                  <AiOutlineUser />
                </div>
              </Button>
            )}
          </Column>
        </Content>
      </Container>
      <Girl src={girl} all="Mascote Rocha" />
    </>
  );
};

export default Home;
