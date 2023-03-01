import React, {useState, useEffect} from 'react';

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

const GraphicsHome = ({history}) => {
  const userLogged = user();
  const [companies, setCompanies] = useState([]);

  const {setCompanyDate} = useCompanyContext();
  useEffect(() => {
    async function loadEmpaty() {
      const response = await api.get('/companies');
      setCompanies(response.data);
    }

    loadEmpaty();
  }, []);

  return (
    <>
      <SideBar page="graphics" />
      <Container>
        <Title>Gráficos</Title>
        <Content>
          <Column>
            {companies.map((company) =>
              !userLogged.responsableFor ? (
                <Button
                  key={company._id}
                  analysis
                  onClick={() => {
                    setCompanyDate(company);
                    history.push('/graphics');
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
                      history.push('/graphics');
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
          </Column>
        </Content>
      </Container>
      <Girl src={girl} all="Mascote Rocha" />
    </>
  );
};

export default GraphicsHome;
