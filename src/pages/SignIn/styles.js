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
  width: 25rem;
  height: 28.12rem;
  border-radius: 10px;
  padding: 1.23rem;
  color: #fff;

  p {
    color: #f30800e5;
    margin-bottom: 15px;
    border: 1px solid #f30800e5;
    padding: 0.62rem;
    width: 100%;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-top: 0.62rem;

    div.group-input {
      display: flex;
      align-items: flex-start;

      label {
        margin-bottom: 0.31rem;
        color: #777777;
      }

      &:nth-child(2) {
        margin-bottom: 1.87rem;
      }
    }

    input {
      padding: 0.31rem;
      background: transparent;
      border: 1px solid #15a6e4;
      margin-bottom: 0.62rem;
      width: 100%;
      height: 3.43rem;
      border-radius: 6px;
    }

    button {
      width: 95%;
      height: 3.43rem;
      border-radius: 0.31rem;
      border: none;
      background: #0e4f85;
      color: #fff;
      font-size: 1.12rem;

      &:hover {
        background: #0c4b81;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 6.25rem;
`;
