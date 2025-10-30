function doGet()
{
  return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Scritp');

}

function obtenerDatosHTML(nombre)
{
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

function obtenerContactos()
{

  let hoja = SpreadsheetApp.openById('19VK2HhBJhAV0hYhePShvGKDTRxI6L9Hpvl4PCFDk4-Q').getActiveSheet();
  let datos = hoja.getDataRange().getValues();
  return datos;
}