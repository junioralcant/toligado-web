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
    width: 95%;
    margin-top: 10px;

    div.group-input {
      display: flex;
      align-items: flex-start;

      label {
        margin-bottom: 5px;
        color: #777777;
      }

      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }

    input {
      padding: 5px;
      background: transparent;
      border: 1px solid #15a6e4;
      margin-bottom: 10px;
      width: 100%;
      height: 55px;
      border-radius: 6px;
    }

    button {
      width: 95%;
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
