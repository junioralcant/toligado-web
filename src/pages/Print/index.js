import moment from 'moment';
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import logo from '../../assets/Logotipo.png';
import { useCompanyContext } from '../../contexts/CompanyContext';

import {
  BoxController,
  BoxPhoto,
  Container,
  Content,
  ContentDescription,
  Header,
} from './styles';

const Print = () => {
  const { company } = useCompanyContext();

  const locationHistory = useLocation();

  const {
    name,
    date,
    location,
    description,
    image,
    id,
    imageResolved,
  } = locationHistory.state;

  useEffect(() => {
    setTimeout(() => window.print(), 800);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <img src={logo} all="" />
          </div>
          <div className="texts">
            <h4 style={{ marginBottom: 25 }}>
              Relatório de Registros
            </h4>
            <h4>Registrado por: {name}</h4>
            <h4>
              Data do registro: {moment(date).format('DD-MM-YYYY')}
            </h4>
          </div>
          <div>
            {company && (
              <img
                src={company.avatar ? company.avatar.url : null}
                all=""
              />
            )}
          </div>
        </Header>
      </Content>

      <ContentDescription>
        <h4>Local: {location}</h4>
        <br />
        <h4> Descrição do registro: {description}</h4>
      </ContentDescription>

      <Content>
        <BoxPhoto>
          <h4>Registro</h4>

          <img src={image} all="" />
        </BoxPhoto>

        {imageResolved && (
          <BoxPhoto>
            <h4>Registro Resolvido</h4>

            <img src={imageResolved} all="" />
          </BoxPhoto>
        )}
      </Content>

      <Content>
        <BoxController>
          <h4 style={{ marginBottom: 10 }}>Verificação / Controle</h4>
          <h4>{id}</h4>
        </BoxController>
      </Content>
    </Container>
  );
};

export default Print;
