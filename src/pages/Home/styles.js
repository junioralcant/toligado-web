import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 650px;
  height: 300px;
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 700px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 120px;
  padding: 10px;
  margin-bottom: 10px;

  cursor: pointer;
  background-image: linear-gradient(to right, #3bb5b4, #106fbc);

  border-radius: 10px;
  color: #fff;
  font-size: 45px;

  &:hover {
    background-image: linear-gradient(to right, #106fbc, #3bb5b4);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    div {
      text-align: left;
      display: flex;
      flex-direction: column;
      width: 150px;
    }
  }

  strong {
    font-size: 30px;
  }

  p {
    font-size: 15px;
  }
`;

export const Girl = styled.img`
  position: absolute;
  right: 20px;
  height: 412px;
  bottom: 10px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: #fff;
  padding: 5px;
`;

export const Title = styled.h1`
  position: absolute;
  top: -60px;
  left: 18%;

  font-size: 25px;
  color: #4d4d4d;
`;
