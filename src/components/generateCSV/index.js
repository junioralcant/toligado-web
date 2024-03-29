import moment from 'moment';
import * as XLSX from 'xlsx';

export default function generateCSV(data) {
  var headers = [
    'Nome',
    'CPF',
    'Identificador',
    'Categoria',
    'Data', // remove commas to avoid errors
    'Local',
    'Descrição',
    'Analisado',
    'Aprovado',
    'Reprovado Motivo',
    'Resolvido',
    'Resolvido Aprovado',
    'Imagem',
    'Imagem Resolvido',
  ];

  var itemsFormatted = [];

  // format the data
  data.forEach((item) => {
    itemsFormatted.push({
      name: item.user.name.replace(/,/g, ''), // remove commas to avoid errors,
      cpf: item.user.cpf,
      id: item._id,
      riskCategory: item.riskCategory,
      date: moment(item.createdAt).format('DD-MM-YYYY'),
      location: item.location,
      description: item.description,
      analyzed: item.analyzed === true ? 'Analizado' : 'Em Análise',
      approved:
        item.analyzed === false
          ? 'Em Análise'
          : item.approved === true
          ? 'Aprovado'
          : 'Reprovado',

      disapprovedReason:
        item.disapproved === true ? item.disapprovedReason : '',
      resolved: item.resolved === true ? 'Sim' : 'Não',
      resolvedApproved:
        item.resolvedApproved === 'APPROVAD' ? 'Sim' : 'Não',
      imagem: item.image.url,
      imagemResolved: item.imageResolved
        ? item.imageResolved.url
        : 'Sem foto',
    });
  });

  var fileTitle = 'TÔ LIGADO SSMA'; // or 'my-unique-title'

  const ws = XLSX.utils.json_to_sheet(itemsFormatted);
  const wb = XLSX.utils.book_new();
  XLSX.utils.sheet_add_aoa(ws, [headers]);
  XLSX.utils.book_append_sheet(wb, ws, fileTitle);
  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, 'toligado.xlsx');

  itemsFormatted = [];
}
