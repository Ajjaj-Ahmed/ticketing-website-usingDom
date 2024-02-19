
const seats = document.getElementsByClassName('seats')
for(const seat of seats){
  seat.addEventListener('click',function handleSelect(event){
    const eventList= event.target;
    // console.log(eventList);
    const eventText = eventList.innerText;
    console.log(eventText)
    addElementToSeat(eventText);
    eventList.style.backgroundColor="green";
    
  })
}

function addElementToSeat(eventText){
  const mainContainer = document.getElementById('seatContainer');
  mainContainer.innerHTML=`${eventText} <p>Economy</p> <p>550</p>`;
  handleSelect(event);
  /* const para = document.createElement('h2');
  para.innerText = eventText;
  console.log(para)
  mainContainer.appendChild(para); */
}
// next problem is append chail in left side


