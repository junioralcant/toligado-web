import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3.12rem;
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
  max-width: 81.25rem;
  margin-right: 6.25rem;
  width: 100%;

  @media (max-width: 1720px) {
    margin-right: 0.18rem;
  }

  @media (max-width: 1620px) {
    margin-right: 1.25rem;
  }

  @media (max-width: 1560px) {
    max-width: 62.5rem;
    margin-left: 12.5rem;
  }

  @media (max-width: 661px) {
    justify-content: center;
    margin-left: 0px;
  }
`;
