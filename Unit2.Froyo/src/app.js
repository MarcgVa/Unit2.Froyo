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
let table = "";
const userInputString = prompt("Enter the flavors you want in a comma separated list", "Vanilla,Vanilla,Vanilla,Chocolate,Strawberry,Coffee,Coffee");

const flavorArr = userInputString.split(",");
//console.log(flavorArr);


const getFlavorTotal = (flavors) => {
  const totalFlavors = {};
  for (const flavor of flavors) {
    flavor in totalFlavors ? totalFlavors[flavor]++ : totalFlavors[flavor] = 1;
  }
  return totalFlavors;
}

const orderTotal = getFlavorTotal(flavorArr);

console.log("Customer Order: ");
console.table(flavorArr);

console.log("Customer Flavor Totals:");

for (const flavor in orderTotal) {
 console.log(`${flavor}: ${orderTotal[flavor]}` );
}

table = '<tbody>';

for(let key in orderTotal){
  table += '<tr>';
  table += '<td class="key">' + key + '</td>';
  table += '<td>' + orderTotal[key] + '</td>';
  table += '</tr>';
}

document.getElementById('tableData').innerHTML = table;