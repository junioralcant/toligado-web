import React, { useState, useEffect } from 'react';
import { FiCodesandbox, FiBarChart2, FiCheck } from 'react-icons/fi';
import { BsFillArchiveFill } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import SideBar from '../../components/SideBar';
import { Container, Button, Content, Column, Girl } from './styles';

import api from '../../services/api';

import girl from '../../assets/girl.png';

import generateCSV from '../../components/generateCSV';

const Dashboard = ({ history }) => {
  const [dangers, setDangers] = useState([]);
  const [dangersApproved, setDangersApproved] = useState([]);
  const [dangersAnalyzed, setDangersAnalyzed] = useState([]);
  const [dangersDisapproved, setDangersDisapproved] = useState([]);

  useEffect(() => {
    async function loadDanger() {
      const response = await api.get('/dangers');
      setDangers(response.data.docs);

      const approved = response.data.docs.filter((data) => {
        if (data.approved === true) {
          return data;
        }
      });

      const analyzed = response.data.docs.filter((data) => {
        if (data.analyzed === false) {
          return data;
        }
      });

      const disapproved = response.data.docs.filter((data) => {
        if (data.disapproved === true) {
          return data;
        }
      });

      setDangersApproved(approved);
      setDangersAnalyzed(analyzed);
      setDangersDisapproved(disapproved);
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
                  <strong>{dangersAnalyzed.length}</strong>
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
            <Button disapproved to="/listrecorddisapproved">
              <div>
                <div>
                  <strong>{dangersDisapproved.length}</strong>
                  <p>Registros Reprovados</p>
                </div>

                <BsFillArchiveFill />
              </div>
            </Button>
            <Button lucky to="/draw">
              <div>
                <div>
                  <strong>#893842A</strong>
                  <p>Sorteio</p>
                </div>

                <FiCodesandbox />
              </div>
            </Button>
          </Column>

          <Column>
            <Button download onClick={() => generateCSV(dangers)}>
              <div>
                <div>
                  <strong>{dangers.length}</strong>
                  <p> Baixar planilha de todos os registros</p>
                </div>

                <AiOutlineCloudDownload />
              </div>
            </Button>
          </Column>
        </Content>
        <Girl src={girl} all="Mascote Rocha" />
      </Container>
    </>
  );
};

export default Dashboard;
