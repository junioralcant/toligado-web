import React, { useState } from "react";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container, Login } from "./styles";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn() {
    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
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
            placeholder="Informe um e-mail válido"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
