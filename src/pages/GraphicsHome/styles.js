import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3.12rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 40.62rem;
  height: 18.75rem;
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 43.75;

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
  width: 18.75rem;
  height: 7.5rem;
  padding: 0.62rem;
  margin-bottom: 0.62rem;

  cursor: pointer;
  background-image: linear-gradient(to right, #3bb5b4, #106fbc);

  border-radius: 10px;
  color: #fff;
  font-size: 2.81rem;

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
      width: 9.37rem;
    }
  }

  strong {
    font-size: 1.87rem;
  }

  p {
    font-size: 0.93rem;
  }
`;

export const Girl = styled.img`
  position: absolute;
  right: 1.25rem;
  height: 25.75;
  bottom: 0.62rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1.25rem;
  background: #fff;
  padding: 5px;
`;

export const Title = styled.h1`
  position: absolute;
  top: -3.75rem;
  left: 18%;

  font-size: 1.56rem;
  color: #4d4d4d;
`;
