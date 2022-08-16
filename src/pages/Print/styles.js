import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* background: red; */

  @media print {
    body {
      margin: 0;
      color: #000;
      background-color: #fff;
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 43.74rem;
  border: solid 1px #000;
  border-top: solid 20px #208eeb;
  padding: 0px 0.62rem;
  margin-bottom: 1.87rem;
`;

export const ContentDescription = styled.div`
  width: 43.74rem;
  border: solid 1px #000;
  border-top: solid 20px #208eeb;
  padding: 0px 0.62rem;
  margin-bottom: 1.87rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: space-between; */
  width: 100%;

  div.texts {
    text-align: center;
  }

  img {
    width: 5rem;
    object-fit: cover;
  }
`;

export const BoxPhoto = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0.62rem;

  h4 {
    margin-bottom: 0.31rem;
  }

  img {
    width: 15rem;
  }
`;

export const BoxController = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0.62rem;
`;
