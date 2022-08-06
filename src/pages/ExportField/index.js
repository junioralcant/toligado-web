import React from 'react';
import Sidbar from '../../components/SideBar';

import { Container, Content } from './styles';
import ExportAllFields from '../../components/ExportAllFields/index';

const ExportField = ({ history }) => {
  return (
    <>
      <Sidbar />
      <Container>
        <Content>
          <ExportAllFields />
        </Content>
      </Container>
    </>
  );
};

export default ExportField;
