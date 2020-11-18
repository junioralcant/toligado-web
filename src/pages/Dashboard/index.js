import React, { useState, useEffect } from "react";
import { FiCodesandbox, FiBarChart2, FiCheck } from "react-icons/fi";

import SideBar from "../../components/SideBar";
import { Container, Button, Content, Column } from "./styles";

import api from "../../services/api";

const Dashboard = ({ history }) => {
  const [dangersApproved, setDangersApproved] = useState([]);
  const [dangersNotApproved, setDangersNotApproved] = useState([]);

  useEffect(() => {
    async function loadDanger() {
      const response = await api.get("/dangers");
      const approved = response.data.docs.filter((data) => {
        if (data.approved === true) {
          return data;
        }
      });

      const notApproved = response.data.docs.filter((data) => {
        if (data.approved === false) {
          return data;
        }
      });

      setDangersApproved(approved);
      setDangersNotApproved(notApproved);
    }

    loadDanger();
  }, []);

  return (
    <>
      <SideBar page="dashboard" />

      <Container>
        <Content>
          <Column>
            <Button analysis to="/listrecordanalisis">
              <div>
                <div>
                  <strong>{dangersNotApproved.length}</strong>
                  <p>Registros para Análise</p>
                </div>

                <FiBarChart2 />
              </div>
            </Button>
            <Button aproved to="/listrecord">
              <div>
                <div>
                  <strong>{dangersApproved.length}</strong>
                  <p>Registros Aprovados</p>
                </div>

                <FiCheck />
              </div>
            </Button>
          </Column>

          <Column>
            <Button lucky to="/draw">
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
