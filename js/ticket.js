
function addChildToSeatTable(elementId){
  let newTr = document.createElement('tr');
        
  //create child to table
  let seatNumber = document.createElement('td'); // have work with this row
  seatNumber.textContent = elementId;
  let seatClass = document.createElement('td');
  seatClass.textContent = 'Economy';
  let seatFare = document.createElement('td');
  seatFare.textContent = 550

  // Append cells to the new row
  newTr.appendChild(seatNumber);
  newTr.appendChild(seatClass);
  newTr.appendChild(seatFare);

  let table = document.getElementById('myTable');
  table.appendChild(newTr);

}


// remove child from table

function removeChildFromTable(){

const table = document.getElementById('myTable');

const lastRow = table.rows[table.rows.length - 1];

table.removeChild(lastRow);

}


// calculate the amount
function calculateTicketPrice(){
  const table = document.getElementById('myTable');
  const NumberOfRow = table.rows.length-1;
  const totalMoney = NumberOfRow *550;
  const element =  document.getElementById('totalAmount');
  const grandElement = document.getElementById('grand-total')
  element.innerText = parseInt(totalMoney);
  grandElement.innerText=parseInt(totalMoney);
  return element.innerText;
}

//Working on input filed
function userData(){
const userfield = document.getElementById('input-name');
const userValue = userfield.value;

const phoneField = document.getElementById('input-phone');
const phoneValue = phoneField.value;

const emailField = document.getElementById('input-name');
const emailValue = emailField.value;

const userFulldata = `<p>Thanks Mr/Mrs ${userValue}</p><p> Your Phone: ${phoneValue}</p> <p>Your Email: ${emailValue} </p>`;
return userFulldata;
}

function calculateGrandTutal(){
  const element = document.getElementById('promo-card').value;
  const total = calculateTicketPrice();
  const finalNumber =parseInt(total);
  const finalAmount = finalNumber-(finalNumber*15)/100;
  if(element === 'NEW15'|| Element === 'Couple 20'){
    const finalAmountElement = document.getElementById('grand-total');
    finalAmountElement.innerText = finalAmount;
  }
}
 
