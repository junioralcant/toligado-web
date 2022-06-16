import React from 'react';

import SideBar from '../../components/SideBar';
import ListDraw from '../../components/ListDraw';
import { Container, Content } from './styles';

const Draw = () => {
  return (
    <>
      <SideBar page="draw" />

      <Container>
        <Content>
          <ListDraw />
        </Content>
      </Container>
    </>
  );
};

export default Draw;
