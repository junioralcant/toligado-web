import React from "react";
import { FiCamera, FiCodesandbox, FiBarChart2, FiCheck } from "react-icons/fi";

import SideBar from "../../components/SideBar";
import { Container, Button, Content, Column } from "./styles";

const Dashboard = () => {
  return (
    <>
      <SideBar page="record" />

      <Container>
        <Content>
          <Column>
            <Button analysis>
              <div>
                <div>
                  <strong>200</strong>
                  <p>Registros para Análise</p>
                </div>

                <FiBarChart2 />
              </div>
            </Button>

            <Button aproved>
              <div>
                <div>
                  <strong>800</strong>
                  <p>Registros Aprovados</p>
                </div>

                <FiCheck />
              </div>
            </Button>
          </Column>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
