import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-conten: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  padding: 30px;

  div {
    text-align: justify;
    max-width: 800px;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    margin-left: 30px;
    margin-bottom: 20px;

    li {
      margin-bottom: 10px;
    }
  }

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 20px;
  }
`;
