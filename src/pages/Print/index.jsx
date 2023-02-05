import moment from 'moment';
import React, {useEffect} from 'react';

import {useLocation} from 'react-router-dom';

import logo from '../../assets/Logotipo.png';
import {useCompanyContext} from '../../contexts/CompanyContext';

import {
  BoxController,
  BoxPhoto,
  Container,
  Content,
  ContentDescription,
  Header,
} from './styles';

const Print = () => {
  const {company} = useCompanyContext();

  const locationHistory = useLocation();

  const {
    name,
    date,
    location,
    description,
    image,
    id,
    resolvedApproved,
    imageResolved,
    disapprovedReason,
  } = locationHistory.state;

  useEffect(() => {
    setTimeout(() => window.print(), 800);
  }, []);

  const typePDF = String(imageResolved).includes('.pdf');

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="texts">
            <h4 style={{marginBottom: 25}}>Relatório de Registros</h4>

            {name ? <h4>Registrado por: {name}</h4> : <br />}

            <h4>
              Data do registro: {moment(date).format('DD-MM-YYYY')}
            </h4>
          </div>
          <div>
            {company && (
              <img
                src={company.avatar ? company.avatar.url : null}
                alt=""
              />
            )}
          </div>
        </Header>
      </Content>

      <ContentDescription>
        <h4>Local: {location}</h4>
        <br />
        <h4> Descrição do registro: {description}</h4>

        {disapprovedReason && (
          <>
            <br />
            <h4> Motivos da reprovação : {disapprovedReason}</h4>
            <br />
          </>
        )}
      </ContentDescription>

      <Content>
        <BoxPhoto>
          <h4>Registro</h4>

          <img src={image} alt="" />
        </BoxPhoto>

        {resolvedApproved === 'APPROVAD' && imageResolved && (
          <BoxPhoto>
            <h4>Registro Resolvido</h4>

            {typePDF ? (
              <div>
                <span>{imageResolved}</span>
              </div>
            ) : (
              <img src={imageResolved} alt="" />
            )}
          </BoxPhoto>
        )}
      </Content>

      <Content>
        <BoxController>
          <h4 style={{marginBottom: 10}}>Verificação / Controle</h4>
          <h4>{id ? id : ''}</h4>
        </BoxController>
      </Content>
    </Container>
  );
};

export default Print;
