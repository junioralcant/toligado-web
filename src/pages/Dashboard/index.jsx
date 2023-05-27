import React, {useState, useEffect} from 'react';
import {FiCodesandbox, FiBarChart2, FiCheck} from 'react-icons/fi';
import {BsFillArchiveFill} from 'react-icons/bs';
import {AiOutlineCloudDownload, AiOutlineUser} from 'react-icons/ai';

import SideBar from '../../components/SideBar';
import {
  Container,
  Button,
  Content,
  Column,
  Girl,
  Title,
} from './styles';

import api from '../../services/api';

import girl from '../../assets/girl.png';

import {useCompanyContext} from '../../contexts/CompanyContext';
import {useTypeDangerContext} from '../../contexts/TypeDangerContext';
import {user} from '../../services/auth';

const Dashboard = ({history}) => {
  const userLogged = user();

  const {company} = useCompanyContext();
  const {
    handleTypeDangerApproved,
    handleTypeDangerAnalyzed,
    handleTypeDangerDisapproved,
  } = useTypeDangerContext();

  const [dangers, setDangers] = useState([]);
  const [dangersApproved, setDangersApproved] = useState([]);
  const [dangersAnalyzed, setDangersAnalyzed] = useState([]);
  const [dangersDisapproved, setDangersDisapproved] = useState([]);
  const [usersAmount, setUsersAmount] = useState(0);

  useEffect(() => {
    async function loadDanger() {
      const response = await api.get(
        `/dangers?company=${company._id}`
      );
      setDangers(response.data);

      const approved = response.data.filter((data) => {
        if (data.approved === true) {
          return data;
        }

        return '';
      });

      const analyzed = response.data.filter((data) => {
        if (data.analyzed === false) {
          return data;
        }

        return '';
      });

      const disapproved = response.data.filter((data) => {
        if (data.disapproved === true) {
          return data;
        }
        return '';
      });

      setDangersApproved(approved);
      setDangersAnalyzed(analyzed);
      setDangersDisapproved(disapproved);
    }

    if (company) {
      loadDanger();
    }
  }, [company]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      if (company) {
        const filterUserCompany = response.data.filter(
          (user) =>
            String(user.belongsCompany?._id) === String(company._id)
        );

        setUsersAmount(filterUserCompany.length);
      }
    }

    loadUsers();
  }, [company]);

  function navigateToRegisterDangerAnalyzed() {
    handleTypeDangerAnalyzed();
    history.push('/listrecord');
  }

  function navigateToRegisterDangerApproved() {
    handleTypeDangerApproved();
    history.push('/listrecord');
  }

  function navigateToRegisterDangerDisapproved() {
    handleTypeDangerDisapproved();
    history.push('/listrecord');
  }

  function navigateToUserList() {
    history.push('/list-users');
  }

  return (
    <>
      <SideBar page="dashboard" />

      <Container>
        <Title>Empresa - {company.name}</Title>

        <Content>
          {!userLogged.responsableFor ? (
            <>
              <Column>
                <Button
                  analysis
                  onClick={navigateToRegisterDangerAnalyzed}
                >
                  <div>
                    <div>
                      <strong>{dangersAnalyzed.length}</strong>
                      <p>Registros para Análise</p>
                    </div>

                    <FiBarChart2 />
                  </div>
                </Button>
                <Button
                  aproved
                  onClick={navigateToRegisterDangerApproved}
                >
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
                <Button
                  disapproved
                  onClick={navigateToRegisterDangerDisapproved}
                >
                  <div>
                    <div>
                      <strong>{dangersDisapproved.length}</strong>
                      <p>Registros Reprovados</p>
                    </div>

                    <BsFillArchiveFill />
                  </div>
                </Button>
                <Button
                  lucky
                  onClick={() => {
                    history.push('/draw');
                  }}
                >
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
                <Button
                  download
                  onClick={() => {
                    history.push('/export-fields');
                  }}
                >
                  <div>
                    <div>
                      <strong>{dangers.length}</strong>
                      <p> Baixar planilha de todos os registros</p>
                    </div>

                    <AiOutlineCloudDownload />
                  </div>
                </Button>

                <Button download onClick={navigateToUserList}>
                  <div>
                    <div>
                      <strong>{usersAmount}</strong>
                      <p>Usuários</p>
                    </div>

                    <AiOutlineUser />
                  </div>
                </Button>
              </Column>
            </>
          ) : (
            <Column>
              <Button
                aproved
                onClick={navigateToRegisterDangerApproved}
              >
                <div>
                  <div>
                    <strong>{dangersApproved.length}</strong>
                    <p>Registros</p>
                  </div>

                  <FiCheck />
                </div>
              </Button>
            </Column>
          )}
        </Content>
      </Container>
      <Girl src={girl} all="Mascote Rocha" />
    </>
  );
};

export default Dashboard;
