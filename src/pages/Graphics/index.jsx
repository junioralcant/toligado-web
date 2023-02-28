import React, {useEffect, useState} from 'react';
import '@grapecity/wijmo.styles/wijmo.css';
import * as wjCore from '@grapecity/wijmo';
import * as wjChart from '@grapecity/wijmo.react.chart';
import * as wjGauge from '@grapecity/wijmo.react.gauge';
import './app.css';
import api from '../../services/api';
import moment from 'moment';

export function Graphics() {
  const [chartData, setChartData] = useState([]);
  const [bulletsData, setBulletsData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const [monthSelected, setMonthSelected] = useState('');

  const [approved, setApproved] = useState([]);
  const [disapproved, setDisapproved] = useState([]);
  const [notAnalyzed, setNotAnalyzed] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [resolvedInAnalysis, setResolvedInAnalysis] = useState([]);
  const [resolvedApproved, setResolvedApproved] = useState([]);
  const [resolvedDisapproved, setResolvedDisapproved] = useState([]);

  const [categoryTransito, setCategoryTransito] = useState([]);
  const [categoryChoqueOuIncendio, setCategoryChoqueOuIncendio] =
    useState([]);
  const [categoryQueda, setCategoryQueda] = useState([]);
  const [categoryCorteOuFratura, setCategoryCorteOuFratura] =
    useState([]);
  const [categoryEpiOuEpc, setCategoryEpiOuEpc] = useState([]);
  const [
    categoryEquipamentoOuFerramenta,
    setCategoryEquipamentoOuFerramenta,
  ] = useState([]);
  const [categoryDocumentacao, setcategoryDocumentacao] = useState(
    []
  );
  const [categoryPessoas, setCategoryPessoas] = useState([]);
  const [categoryOutros, setCategoryOutros] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(
        '/dangers?initialDate=2000-01-01&finalDate=2050-01-01'
      );

      const total = response.data.filter(
        (item) => moment(item.createdAt).format('Y') === '2022'
      );

      const approved = total.filter((item) => item.approved === true);
      setApproved(approved);

      const disapproved = total.filter(
        (item) => item.disapproved === true
      );
      setDisapproved(disapproved);

      const notAnalyzed = total.filter(
        (item) => item.analyzed === false
      );

      setNotAnalyzed(notAnalyzed);
      const resolved = total.filter((item) => item.resolved === true);
      setResolved(resolved);

      const resolvedInAnalysis = total.filter(
        (item) =>
          item.resolved === true &&
          item.resolvedApproved === 'ANALYSIS'
      );
      setResolvedInAnalysis(resolvedInAnalysis);

      const resolvedApproved = total.filter(
        (item) =>
          item.resolved === true &&
          item.resolvedApproved === 'APPROVAD'
      );
      setResolvedApproved(resolvedApproved);

      const resolvedDisapproved = total.filter(
        (item) =>
          item.resolved === true &&
          item.resolvedApproved === 'DISAPPROVED'
      );
      setResolvedDisapproved(resolvedDisapproved);

      const categoryTransito = total.filter(
        (item) => item.riskCategory === 'Trânsito'
      );
      setCategoryTransito(categoryTransito);

      const categoryChoqueOuIncendio = total.filter(
        (item) => item.riskCategory === 'Choque ou incêndio'
      );
      setCategoryChoqueOuIncendio(categoryChoqueOuIncendio);

      const categoryQueda = total.filter(
        (item) => item.riskCategory === 'Queda'
      );
      setCategoryQueda(categoryQueda);

      const categoryEpiOuEpc = total.filter(
        (item) => item.riskCategory === 'EPI ou EPC'
      );
      setCategoryEpiOuEpc(categoryEpiOuEpc);

      const categoryCorteOuFratura = total.filter(
        (item) => item.riskCategory === 'Corte ou fratura'
      );
      setCategoryCorteOuFratura(categoryCorteOuFratura);

      const categoryEquipamentoOuFerramenta = total.filter(
        (item) => item.riskCategory === 'Equipamento ou ferramenta'
      );
      setCategoryEquipamentoOuFerramenta(
        categoryEquipamentoOuFerramenta
      );

      const categoryDocumentacao = total.filter(
        (item) => item.riskCategory === 'Documentação'
      );
      setcategoryDocumentacao(categoryDocumentacao);

      const categoryPessoas = total.filter(
        (item) => item.riskCategory === 'Pessoas'
      );
      setCategoryPessoas(categoryPessoas);

      const categoryOutros = total.filter(
        (item) => item.riskCategory === 'Outros'
      );
      setCategoryOutros(categoryOutros);

      const data = [
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '1'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Jan 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '2'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Fev 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '3'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Mar 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '4'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Abr 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '5'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Mai 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '6'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Jun 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '7'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Jul 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '8'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Aug 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '9'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Set 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '10'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Out 2022',
          target: 25000,
        },
        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '11'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Nov 2022',
          target: 25000,
        },

        {
          actual: total.filter(
            (item) => moment(item.createdAt).format('M') === '12'
          ).length,
          bad: 15000,
          good: 40000,
          max: 50000,
          month: 'Dez 2022',
          target: 25000,
        },
      ];

      const dataTotal = [
        {
          actual: approved.length,
          category: 'Aprovados',
        },
        {
          actual: disapproved.length,
          category: 'Reprovados',
        },
        {
          actual: notAnalyzed.length,
          category: 'Em análise',
        },
        {
          actual: resolved.length,
          category: 'Resolvidos',
        },
        {
          actual: resolvedInAnalysis.length,
          category: 'Resolvidos em análise',
        },
        {
          actual: resolvedApproved.length,
          category: 'Resolvidos aprovados',
        },
        {
          actual: resolvedDisapproved.length,
          category: 'Resolvidos reprovados',
        },
      ];

      const dataTotalCategory = [
        {
          actual: categoryTransito.length,
          category: 'Trânsito',
        },
        {
          actual: categoryChoqueOuIncendio.length,
          category: 'Choque ou incêndio',
        },
        {
          actual: categoryQueda.length,
          category: 'Queda',
        },
        {
          actual: categoryCorteOuFratura.length,
          category: 'Corte ou fratura',
        },
        {
          actual: categoryEpiOuEpc.length,
          category: 'Corte ou fratura',
        },
        {
          actual: categoryEquipamentoOuFerramenta.length,
          category: 'Equipamento ou ferramenta',
        },
        {
          actual: categoryDocumentacao.length,
          category: 'Documentação',
        },
        {
          actual: categoryPessoas.length,
          category: 'Pessoas',
        },
        {
          actual: categoryOutros.length,
          category: 'Outros',
        },
      ];

      setChartData(data);
      setBulletsData(dataTotal);
      setPieData(dataTotal);
      setCategoryData(dataTotalCategory);
    }

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const dataTotalMonth = [
      {
        actual: approved.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Aprovados',
      },
      {
        actual: disapproved.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Reprovados',
      },
      {
        actual: notAnalyzed.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Em análise',
      },
      {
        actual: resolved.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Resolvidos',
      },
      {
        actual: resolvedInAnalysis.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Resolvidos em análise',
      },
      {
        actual: resolvedApproved.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Resolvidos aprovados',
      },
      {
        actual: resolvedDisapproved.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Resolvidos reprovados',
      },
    ];

    const dataTotalCategoryMonth = [
      {
        actual: categoryTransito.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Trânsito',
      },
      {
        actual: categoryChoqueOuIncendio.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Choque ou incêndio',
      },
      {
        actual: categoryQueda.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Queda',
      },
      {
        actual: categoryCorteOuFratura.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Corte ou fratura',
      },
      {
        actual: categoryEquipamentoOuFerramenta.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Equipamento ou ferramenta',
      },
      {
        actual: categoryDocumentacao.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Documentação',
      },
      {
        actual: categoryPessoas.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Pessoas',
      },
      {
        actual: categoryOutros.filter(
          (item) =>
            moment(item.createdAt).format('M') ===
            String(monthSelected)
        ).length,
        category: 'Outros',
      },
    ];

    setBulletsData(dataTotalMonth);
    setPieData(dataTotalMonth);
    setCategoryData(dataTotalCategoryMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthSelected]);

  function chartSelectionChanged(e) {
    var selIndex = e._selectionIndex;
    setMonthSelected(selIndex + 1);
  }

  function initializePie(flex) {
    flex.dataLabel.content = function (ht) {
      let sum = ht.chart.itemsSource
        .map((c) => c.actual)
        .reduce((sum, cur) => sum + cur);
      return `${wjCore.Globalize.format(ht.value / sum, 'p0')}`;
    };
  }

  return (
    <div className="container-fluid">
      <div className="form-group">
        <div className="row">
          <wjChart.FlexChart
            header="2022 Annual Sales"
            bindingX="month"
            selectionMode="Point"
            // initialized={initializeChart}
            itemsSource={chartData}
            selectionChanged={chartSelectionChanged}
          >
            <wjChart.FlexChartLegend position="None"></wjChart.FlexChartLegend>
            <wjChart.FlexChartSeries
              binding="actual"
              name="Total de Registros"
            ></wjChart.FlexChartSeries>
          </wjChart.FlexChart>
        </div>
        <div className="row">
          <div className="col">
            <wjChart.FlexPie
              header={'Registros'}
              bindingName="category"
              binding="actual"
              itemsSource={pieData}
              initialized={initializePie}
            >
              <wjChart.FlexChartLegend position="Bottom"></wjChart.FlexChartLegend>
            </wjChart.FlexPie>
          </div>
          <div className="col">
            <ul className="bullets">
              {bulletsData.map((item) => {
                return (
                  <li key={item}>
                    <label>{item.category}</label>
                    <wjGauge.BulletGraph
                      showText="Value"
                      target={item.target}
                      max={item.max}
                      good={item.good}
                      bad={item.bad}
                      value={item.actual}
                    ></wjGauge.BulletGraph>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row" style={{marginTop: 20}}>
          <div className="col">
            <ul className="bullets">
              {categoryData.map((item) => {
                return (
                  <li key={item}>
                    <label>{item.category}</label>
                    <wjGauge.BulletGraph
                      showText="Value"
                      target={item.target}
                      max={item.max}
                      good={item.good}
                      bad={item.bad}
                      value={item.actual}
                    ></wjGauge.BulletGraph>
                  </li>
                );
              })}
            </ul>
            <div style={{marginTop: 50}} />
          </div>
          <div className="col">
            <wjChart.FlexPie
              header={'Categorias'}
              bindingName="category"
              binding="actual"
              itemsSource={categoryData}
              initialized={initializePie}
            >
              <wjChart.FlexChartLegend position="Bottom"></wjChart.FlexChartLegend>
            </wjChart.FlexPie>
          </div>
        </div>
      </div>
    </div>
  );
}
