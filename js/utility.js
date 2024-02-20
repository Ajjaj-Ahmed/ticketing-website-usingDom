
const seats = document.getElementsByClassName('seatBtn')

let evenTextArray = [];

//step:one

  for(const seat of seats){
    seat.addEventListener('click',function handleSelect(event){
      const userId =event.target.id;
      const eventList= event.target;
      const eventText = eventList.innerText;

      if(evenTextArray.includes(eventText) === true){

        // increase the available seat number
        increaseTheDecreseValue();

        removeBackgroundColor(userId);

        removeChildFromTable();

        // Decrease the number of seat if select 2nd time.
        decreaseTheIncreaseValue();
      } 
      else{
        
        setBackgroundColor(userId);

        addChildToSeatTable(eventText);

        evenTextArray.push(eventText);

        // Increase seat number first Time
        increaseScore('seatNumber');

        // decrease seat number after select any seat
        decreaseScore('availableSeat'); 

      }
      calculateTicketPrice();
      
  
    })
  }





//step: 3 increase seat number
function increaseScore(elementId){
  let elementSeat = document.getElementById(elementId);
  const elementText=elementSeat.innerText;
  const element = parseInt(elementText);
  const elementNumber = element+1;
  elementSeat.innerText = elementNumber;

} 


// step : 4 decrease seat number
 function decreaseScore(elementId){
  let elementSeat = document.getElementById(elementId);
  const elementText=elementSeat.innerText;
  const element = parseInt(elementText);
  const elementNumber = element-1;
  elementSeat.innerText = elementNumber;
} 

function increaseTheDecreseValue(){
  const elementText = document.getElementById('availableSeat').innerText;
  const element = parseInt(elementText);
  const number = element+1;
  document.getElementById('availableSeat').innerText = number;
}

function decreaseTheIncreaseValue(){
  const elementText = document.getElementById('seatNumber').innerText;
  const element = parseInt(elementText);
  const number = element-1;
  document.getElementById('seatNumber').innerText = number;
}
 

//background color
function setBackgroundColor(elementId){
  const selectElement = document.getElementById(elementId);
  selectElement.classList.add('bg-orange-400');
  }

//Remove background color
function removeBackgroundColor(elementId){
  const selectElement = document.getElementById(elementId);
  selectElement.classList.remove('bg-orange-400');
  }
  