import styled from 'styled-components';

export const Button = styled.button`
  display: ${(props) => (props.teste ? 'relative' : 'none')};
  top: 0;
  right: 0;
  background: none;
  color: #000;
  font-size: 2rem;
  margin-top: 0.62rem;
  margin-left: 0.62rem;
  border: none;

  @media (max-width: 600px) {
    display: ${(props) =>
      props.teste ? 'unset' : 'none'} !important;
    position: absolute !important;
  }
`;

export const Close = styled.button`
  display: none;
  top: 0;
  right: 0;
  background: none;
  color: #000;
  font-size: 2rem;
  margin-top: 0.62rem;
  margin-left: 0.62rem;
  border: none;
  color: #fff;

  @media (max-width: 600px) {
    display: unset !important;
    position: absolute !important;
  }
`;

export const SideNav = styled.div`
  height: 100%;
  width: 12.5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #208eeb;
  overflow-x: hidden;
  padding-top: 1.87rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 6.25rem;
    align-items: center;

    p {
      display: none;
    }

    div {
      width: 100%;
    }

    a,
    button {
      width: 100%;
      justify-content: center;
      span {
        font-size: 1.25rem;
      }
    }
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.teste ? 'relative' : 'none')};
  }

  strong {
    display: flex;
    margin: 1.25rem 0 2.5rem 0;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    font-size: 0.93rem;
    color: #fff;
    span {
      margin-right: 0.62rem;
      font-size: 1.56rem;
      color: #fbc46a;
    }

    a {
      display: flex;
      background: #000;
    }
  }

  div.companyData {
    font-size: 0.81rem;
    margin-left: 0.62rem;
    color: #fff;
    margin-top: -1.87rem;

    p {
      margin-bottom: 0.62rem;
    }
  }

  div {
    margin-bottom: 1.87rem;
    small {
      margin: 0px 0px 50px 1.25rem;
      font-size: 0.93rem;
      color: #a6d2f7;
      text-transform: uppercase;
    }
  }

  a {
    margin: 0.62rem 0px 0px 0px;
    padding: 0.93rem 0px 0.93rem 1.25rem;
    text-decoration: none;
    font-size: 0.93rem;
    color: #a6d2f7;
    display: flex;

    &:hover {
      color: #f1f1f1;
    }

    span {
      margin-right: 1.56rem;
    }
  }

  a.active {
    background-image: linear-gradient(to right, #39a2fb, #0083f2);
    box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    color: #fff;

    span {
      color: #fbc46a;
    }
  }

  button {
    position: absolute;
    bottom: 0;
    margin-bottom: 0.32rem;
    margin: 0.62rem 0 0 0;
    padding: 0.93rem 0 0.93rem 1.25rem;
    text-decoration: none;
    font-size: 0.93rem;
    color: #f73e57;
    display: flex;
    background: none;
    border: none;

    &:hover {
      color: #d4354a;
    }

    span {
      margin-right: 1.56rem;
    }
  }
`;
export const Background = styled.div`
  position: fixed;
  display: ${(props) => (props.teste ? 'block' : 'none')};
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
