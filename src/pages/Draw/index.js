import React from 'react';

import { useCompany } from '../../hooks/useCompany';

import SideBar from '../../components/SideBar';
import ListDraw from '../../components/ListDraw';
import { Container, Content, Title } from './styles';

const Draw = () => {
  const { company } = useCompany();

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
