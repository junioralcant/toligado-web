import React from "react";
import { FiCodesandbox, FiBarChart2, FiCheck } from "react-icons/fi";

import SideBar from "../../components/SideBar";
import { Container, Button, Content, Column } from "./styles";

const Dashboard = ({ history }) => {
  return (
    <>
      <SideBar page="dashboard" />

      <Container>
        <Content>
          <Column>
            <Button analysis to="/listrecordanalisis">
              <div>
                <div>
                  <strong>200</strong>
                  <p>Registros para Análise</p>
                </div>

                <FiBarChart2 />
              </div>
            </Button>
            <Button aproved to="/listrecord">
              <div>
                <div>
                  <strong>800</strong>
                  <p>Registros Aprovados</p>
                </div>

                <FiCheck />
              </div>
            </Button>
          </Column>

          <Column>
            <Button lucky>
              <div>
                <div>
                  <strong>#893842A</strong>
                  <p>Número da Sorte</p>
                </div>

                <FiCodesandbox />
              </div>
            </Button>
          </Column>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
