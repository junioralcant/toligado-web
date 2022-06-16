import React from 'react';
import Sidbar from '../../components/SideBar';

import Danger from '../../components/Danger';

import { Container, Content } from './styles';

const ListRecord = ({ history }) => {
  return (
    <>
      <Sidbar />
      <Container>
        <Content>
          <Danger approved={true} history={history} />
        </Content>
      </Container>
    </>
  );
};

export default ListRecord;
