import React from 'react';

import SideBar from '../../components/SideBar';
import ListDraw from '../../components/ListDraw';
import { Container, Content, Title } from './styles';

import { useCompanyContext } from '../../contexts/CompanyContext';

const Draw = () => {
  const { company } = useCompanyContext();

  return (
    <>
      <SideBar page="draw" />

      <Container>
        <Title>Sorteio - {company.name}</Title>
        <Content>
          <ListDraw />
        </Content>
      </Container>
    </>
  );
};

export default Draw;
