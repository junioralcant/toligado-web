import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-conten: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  padding: 1.87rem;

  div {
    text-align: justify;
    max-width: 50rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  ul {
    margin-left: 1.87rem;
    margin-bottom: 1.25rem;

    li {
      margin-bottom: 0.62rem;
    }
  }

  h2 {
    margin-bottom: 1.25rem;
  }

  h3 {
    margin-bottom: 1.25rem;
  }
`;
