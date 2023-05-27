import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3.12rem;
  width: 100%;
  margin-left: 6.25rem;

  select {
    background: none;
    border: none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    color: #4d4d4d;
  }
`;

export const Header = styled.div`
  width: 1000px;

  input {
    height: 2.75rem;
    background-color: #fff;
    margin: 0 0.93rem 0 0;
    border-radius: 10px;
    padding-left: 0.93rem;
    padding-right: 0.93rem;
    border: 1px #c4c4c4;
    width: 300px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  width: 1000px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead,
  tr {
    background-color: #ffffff;
    color: #4d4d4d;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #cecece;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #4d4d4d;
  }
`;
