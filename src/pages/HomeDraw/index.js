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
import { useCompany } from '../../hooks/useCompany';

const HomeDraw = ({ history }) => {
  const [companies, setCompanies] = useState([]);

  const { setCompanyDate } = useCompany();

  useEffect(() => {
    async function loadEmpaty() {
      const response = await api.get('/companies');
      setCompanies(response.data);
    }

    loadEmpaty();
  }, []);

  return (
    <>
      <SideBar page="draw" />
      <Container>
        <Title>Sorteio</Title>
        <Content>
          <Column>
            {companies.map((company) => (
              <Button
                key={company._id}
                analysis
                onClick={() => {
                  setCompanyDate(company);
                  history.push('/draw');
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
        <Girl src={girl} all="Mascote Rocha" />
      </Container>
    </>
  );
};

export default HomeDraw;
