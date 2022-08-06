import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  width: 100%;
  height: 100%;

  @media (max-width: 1560px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1300px;
  margin-right: 100px;
  width: 100%;

  @media (max-width: 1720px) {
    margin-right: 50px;
  }

  @media (max-width: 1620px) {
    margin-right: 20px;
  }

  @media (max-width: 1560px) {
    max-width: 1000px;
    margin-left: 200px;
  }

  @media (max-width: 661px) {
    justify-content: center;
    margin-left: 0px;
  }
`;
