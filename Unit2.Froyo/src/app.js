/*
  get user input [arr of flavors]

  console.table(arr)
  obj containing total count of flavors

  output object 

  obj = {
    key: value,
    key: value,
    key: value
  }

*/

const userInputString = prompt("Enter the flavors you want in a comma separated list", "Vanilla,Vanilla,Vanilla,Chocolate,Strawberry,Coffee,Coffee");

const convertToArr = (string) => {
  let newStr = string.replace(/\s/g,'')
  const listArr = newStr.split(",");
  return listArr;
}

const getFlavorTotal = (orderList) => {
  const orderTotalsObj = {};
  for (const key of orderList) {
    key in orderTotalsObj ? orderTotalsObj[key]++ : orderTotalsObj[key] = 1;
  }
  return orderTotalsObj;
}

//generate grandtotal of all flavors ordered by a customer
const sumGrandTotal = (orderTotal) => {
  let total = 0;
  for (const key in orderTotal) {
    total += orderTotal[key];
  }
  return total;
}

const buildOrderTable = (orderTotal) =>{
  let table = "";
  // Add header
  table = '<thead>'
  table +='<tr class="table-primary text-center">';
  table +='<th scope="col">Flavor</th>';
  table +='<th scope="col">Amount</th>';
  table +='</tr>';
  table +='</thead>';

  // flavors and totals
  for(let key in orderTotal){
    table += '<tr class="table-secondary">';
    table += '<td>' + key + '</td>';
    table += '<td class="text-center">' + orderTotal[key] + '</td>';
    table += '</tr>';
  }

  // add grandtotal
  const grandTotal = sumGrandTotal(orderTotal);
  table += '<tr>'
  table += '<td class="bg-warning">' + "Total order:  " + '</td>';
  table += '<td class="bg-warning text-center">' + grandTotal + '</td>';
  table += '</tr>'

  return table
}


const flavorArr = convertToArr(userInputString);
const orderObj = getFlavorTotal(flavorArr);
const dataTable = buildOrderTable(orderObj);

//Logging to console per rubric
console.log("Customer Order: ");
console.table(flavorArr);

console.log("Customer Flavor Totals:");
for (const flavor in orderObj) {
 console.log(`${flavor}: ${orderObj[flavor]}` );
}

//build customer order table
document.getElementById('tableData').innerHTML = dataTable;