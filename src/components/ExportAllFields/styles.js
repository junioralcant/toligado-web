import styled from 'styled-components';

export const BoxInputsDate = styled.div`
  position: absolute;
  top: -6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;

  strong {
    margin-right: 1.25rem;
  }

  button.search {
    background-color: #208eeb;
    border: 0;
    padding: 0.31rem;
    justify-content: center;
    align-items: center;
    margin-top: 0.62rem;
    border-radius: 10px;
    height: 3.75rem;
    width: 12.5rem;
    font-size: 1.87rem;
  }
  button.excluir {
    background-color: #ae3d0c;
    border: 0;
    padding: 0.31rem;
    justify-content: center;
    align-items: center;
    margin-top: 0.62rem;
    border-radius: 10px;
    height: 3.75rem;
    width: 12.5rem;
    font-size: 1.87rem;
    margin-left: 0.31rem;
  }
`;

export const BoxInpuDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.62rem;
  /* padding: 1.25rem 1.25rem 0 1.25rem; */
  input.date {
    height: 3.75rem;
    background-color: #fff;
    margin: 0 0.93rem 0px 0;
    border-radius: 10px;
    padding-left: 0.93;
    padding-right: 0.93;
    border: 1px #c4c4c4;
    width: 100%;
  }
`;

export const ButtonDownload = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1ba667;
  color: #fff;
  font-weight: bold;
  font-size: 0.93rem;
  padding: 0.31rem;
  border-radius: 5px;
  border: none;

  top: -5.62rem;
  left: -5.62rem;
  span {
    margin-top: 0.31rem;
    margin-left: 0.31rem;
    font-size: 1.56rem;
  }

  &:hover {
    background: #138752;
  }
`;
