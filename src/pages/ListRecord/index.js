import React from "react";
import Sidbar from "../../components/SideBar";

import Danger from "../../components/Danger";

import { Container, Content } from "./styles";

const ListRecord = () => {
  return (
    <>
      <Sidbar />
      <Container>
        <Content>
          <Danger approved={false} />
        </Content>
      </Container>
    </>
  );
};

export default ListRecord;
