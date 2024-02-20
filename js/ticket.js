
function addChildToSeatTable(elementId){
  let newTr = document.createElement('tr');
        
  //create cell
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
