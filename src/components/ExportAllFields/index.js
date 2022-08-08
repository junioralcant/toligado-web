import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import generateCSV from '../generateCSV';

import { BoxInputsDate, BoxInpuDate, ButtonDownload } from './styles';
import {
  AiOutlineCloseCircle,
  AiOutlineCloudDownload,
  AiOutlineSearch,
} from 'react-icons/ai';
import { useCompany } from '../../hooks/useCompany';

const ExportAllFields = () => {
  const { company } = useCompany();

  const [dangers, setDangers] = useState([]);
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [search, setSearch] = useState(false);
  const [dateInitialChecks, setDateInitialChecks] = useState('');
  const [dateFinalChecks, setDateFinalChecks] = useState('');

  useEffect(() => {
    async function loadDanger() {
      const response = await api.get(
        `/dangers?initialDate=${dateInitialChecks}&finalDate=${dateFinalChecks}&company=${company._id}`
      );

      setDangers(response.data);
    }

    if (company) {
      loadDanger();
    }
  }, [dateInitialChecks, dateFinalChecks, company]);

  function checksDates() {
    if (initialDate.length !== 10 || finalDate.length !== 10) {
      return;
    }

    setDateInitialChecks(initialDate);
    setDateFinalChecks(finalDate);

    setSearch(true);
  }

  function coloseSearch() {
    setFinalDate('');
    setDateFinalChecks('');
    setInitialDate('');
    setDateFinalChecks('');
    setSearch(false);
  }

  return (
    <>
      <ButtonDownload
        onClick={() => {
          generateCSV(dangers);
        }}
      >
        Baixar Planilha
        <span>
          <AiOutlineCloudDownload />
        </span>
      </ButtonDownload>

      <BoxInputsDate>
        <strong>
          Registros <br /> {dangers.length}
        </strong>
        <BoxInpuDate>
          <input
            className="date"
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
            type="date"
          />
        </BoxInpuDate>

        <BoxInpuDate>
          <input
            className="date"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
            type="date"
          />
        </BoxInpuDate>

        <button
          className="search"
          onClick={() => {
            checksDates();
          }}
        >
          <AiOutlineSearch color="#fff" />
        </button>

        {search && (
          <button
            className="excluir"
            onClick={() => {
              coloseSearch();
            }}
          >
            <AiOutlineCloseCircle color="#fff" />
          </button>
        )}
      </BoxInputsDate>
    </>
  );
};

export default ExportAllFields;
