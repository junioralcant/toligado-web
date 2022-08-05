import styled from 'styled-components';

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
  height: 450px;
  border-radius: 10px;
  background: #15a6e4;
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
    align-items: center;
    width: 90%;
    margin-top: 10px;

    div.group-input {
      display: flex;
      align-items: flex-start;

      label {
        margin-bottom: 5px;
      }

      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }

    input {
      padding: 5px;
      background: #eff3f6;
      margin-bottom: 10px;
      width: 100%;
      height: 55px;
      border-radius: 6px;
      border: none;
    }

    button {
      width: 90%;
      height: 55px;
      border-radius: 5px;
      border: none;
      background: #0e4f85;
      color: #fff;
      font-size: 18px;

      &:hover {
        background: #0c4b81;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
`;
