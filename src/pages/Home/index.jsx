import React, { useState, useEffect } from 'react';

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
import { useCompanyContext } from '../../contexts/CompanyContext';

const Home = ({ history }) => {
  const [companies, setCompanies] = useState([]);

  const { setCompanyDate } = useCompanyContext();

  useEffect(() => {
    async function loadEmpaty() {
      const response = await api.get('/companies');
      setCompanies(response.data);
    }

    loadEmpaty();
  }, []);

  return (
    <>
      <SideBar page="dashboard" />
      <Container>
        <Title>Registro</Title>
        <Content>
          <Column>
            {companies.map((company) => (
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
            ))}
          </Column>
        </Content>
      </Container>
      <Girl src={girl} all="Mascote Rocha" />
    </>
  );
};

export default Home;