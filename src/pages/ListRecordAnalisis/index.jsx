import React from "react";
import Sidbar from "../../components/SideBar";

import Danger from "../../components/Danger";

import { Container, Content } from "./styles";

const ListRecordAnalisis = () => {
  return (
    <>
      <Sidbar />
      <Container>
        <Content>
          <Danger analyzed={false} />
        </Content>
      </Container>
    </>
  );
};

export default ListRecordAnalisis;
