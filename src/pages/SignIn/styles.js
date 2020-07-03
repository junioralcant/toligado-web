import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 320px;
  border-radius: 10px;
  background: #208eeb;
  padding: 20px;
  color: #fff;

  p {
    color: #f30800e5;
    margin-bottom: 15px;
    border: 1px solid #f30800e5;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;

    input {
      padding: 5px;
      background: #eff3f6;
      margin-bottom: 10px;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
    }

    button {
      margin-top: 30px;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      background: #0e4f85;
      color: #fff;

      &:hover {
        background: #0c4b81;
      }
    }
  }
`;
