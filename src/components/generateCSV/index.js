import moment from 'moment';

export default function generateCSV(data) {
  function convertToCSV(objArray) {
    var array =
      typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ',';

        line += array[i][index];
      }

      str += line + '\r\n';
    }

    return str;
  }

  function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
      items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      var link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  var headers = {
    name: 'Nome',
    cpf: 'CPF',
    id: 'Identificador',
    date: 'Data', // remove commas to avoid errors
    location: 'Local',
    description: 'Descrição',
    analyzed: 'Analizado',
    approved: 'Aprovado',
    disapprovedReason: 'Reprovado Motivo',
    imagem: 'Imagem',
  };

  var itemsFormatted = [];

  // format the data
  data.forEach((item) => {
    itemsFormatted.push({
      name: item.user.name.replace(/,/g, ''), // remove commas to avoid errors,
      cpf: item.user.cpf,
      id: item._id,
      date: moment(item.createdAt).format('DD-MM-YYYY'),
      location: item.location,
      description: item.description,
      analyzed: item.analyzed === true ? 'Analizado' : 'Em Analizado',
      approved:
        item.analyzed === false
          ? 'Em Analizado'
          : item.approved === true
          ? 'Aprovado'
          : 'Reprovado',

      disapprovedReason:
        item.disapproved === true ? item.disapprovedReason : '',
      imagem: item.image.url,
    });
  });

  var fileTitle = 'TÔ LIGADO SSMA'; // or 'my-unique-title'

  exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download

  itemsFormatted = [];
}
