import React from "react";
import { FiCamera, FiCodesandbox, FiBarChart2, FiCheck } from "react-icons/fi";

import SideBar from "../../components/SideBar";
import { Container, Button, Content, Column } from "./styles";

const Dashboard = ({ history }) => {
  return (
    <>
      <SideBar page="dashboard" />

      <Container>
        <Content>
          <Column>
            <Button records onClick={() => history.push("listrecord")}>
              <div>
                <div>
                  <strong>1000</strong>
                  <p>Total de Registro</p>
                </div>

                <FiCamera />
              </div>
            </Button>

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
