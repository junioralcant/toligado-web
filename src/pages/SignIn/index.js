import React, { useState } from "react";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container, Login } from "./styles";

const SignIn = ({ history }) => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn() {
    if (!cpf || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/sessions", { cpf, password });
        login(response.data.token);
        console.log(response.data.token);
        history.push("/");
      } catch (err) {
        setError(
          "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  }

  return (
    <Container>
      <Login>
        <h2>Tô Ligado</h2>
        {error && <p>{error}</p>}
        <div>
          <input
            type="email"
            placeholder="Informe um CPF válido"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="password"
            placeholder="Informe a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Entrar</button>
        </div>
      </Login>
    </Container>
  );
};

export default SignIn;
