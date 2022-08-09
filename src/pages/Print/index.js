import moment from 'moment';
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import logo from '../../assets/Logotipo.png';
import { useCompany } from '../../hooks/useCompany';

import {
  BoxController,
  BoxPhoto,
  Container,
  Content,
  Header,
} from './styles';

const Print = () => {
  const { company } = useCompany();

  const locationHistory = useLocation();

  const { name, date, location, description, image, id } =
    locationHistory.state;

  useEffect(() => {
    setTimeout(() => window.print(), 800);
  }, []);

  console.log(company);
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

      <Content>
        <h4>Local: {location}</h4>
        <h4> Descrição do registro: {description}</h4>
      </Content>

      <Content>
        <BoxPhoto>
          <h4>Arquivo anexado</h4>

          <img src={image} />
        </BoxPhoto>
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
