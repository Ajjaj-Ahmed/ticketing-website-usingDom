
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
        removeBackgroundColor(userId);
        increaseTheDecreseValue();
        decreaseTheIncreaseValue();
      } 
      else{
        setBackgroundColor(userId);

        addChildToSeatTable(eventText);

        evenTextArray.push(eventText);
      }

  
      //increase and decrease score
      increaseScore('seatNumber');
      decreaseScore('availableSeat'); 
  
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
  const number = element+2;
  document.getElementById('availableSeat').innerText = number;
}

function decreaseTheIncreaseValue(){
  const elementText = document.getElementById('seatNumber').innerText;
  const element = parseInt(elementText);
  const number = element-2;
  document.getElementById('seatNumber').innerText = number;
}
 

//background color
function setBackgroundColor(elementId){
  const selectElement = document.getElementById(elementId);
  selectElement.classList.add('bg-orange-400');
  }
  function removeBackgroundColor(elementId){
  const selectElement = document.getElementById(elementId);
  selectElement.classList.remove('bg-orange-400');
  }
  