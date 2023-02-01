import React, {useState} from 'react';

import api from '../../services/api';
import {login, setUser} from '../../services/auth';
import Loader from '../../components/Loader';

import logo from '../../assets/Logotipo.png';

import {Container, Login, Logo} from './styles';

import {ToastContainer, toast} from 'react-toastify';

const SignIn = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    if (!email || !password) {
      toast.error('Preencha e-mail e senha para continuar!', {
        autoClose: 4000,
      });
    } else {
      try {
        setLoading(true);
        const response = await api.post('/sessions', {
          email,
          password,
        });
        setUser(response.data.admin);
        login(response.data.token);
        history.push('/');
        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error(
          'Houve um problema com o login, verifique suas credenciais.',
          {
            autoClose: 4000,
          }
        );
      }
    }
  }

  return (
    <>
      <ToastContainer />

      <Container>
        <Login>
          <Logo src={logo} />
          <div>
            <div className="group-input">
              <label for="email">E-mail</label>
              <input
                type="email"
                placeholder="Informe um e-mail válido"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </div>

            <div className="group-input">
              <label for="password">Senha</label>
              <input
                type="password"
                placeholder="Informe a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <button onClick={handleSignIn}>Entrar</button>
            )}
          </div>
        </Login>
      </Container>
    </>
  );
};

export default SignIn;
