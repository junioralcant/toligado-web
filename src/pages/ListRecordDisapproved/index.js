import React from "react";
import Sidbar from "../../components/SideBar";

import Danger from "../../components/Danger";

import { Container, Content } from "./styles";

const ListRecordDisapproved = () => {
  return (
    <>
      <Sidbar />
      <Container>
        <Content>
          <Danger disapproved={true} />
        </Content>
      </Container>
    </>
  );
};

export default ListRecordDisapproved;
