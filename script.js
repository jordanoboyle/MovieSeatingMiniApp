const container   = document.querySelector('.container');
const seats       = document.querySelectorAll('.row .seat:not(.occupied)');  //remember that we have a few different seat options here which is why we used querySelectorAll(). "Returns all element descendats of node that match selectors"
const count       = document.getElementById('count');
const total       = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;  //parseInt() is an option.
console.log(ticketPrice);  //not dynamic but locks in the initial value from the drop down movie prices
console.log(typeof ticketPrice); //We would like this to be a number (parse or use '+' operator on movieSelect.value)

//Event Listeners

container.addEventListener('click', (e) => {
  // console.log(e.target);  //shows us the exact element that is clicked on
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied') //ensuring the click only registers 
  ) {
    console.log(e.target); //shows us the class of 'seat' in the console.
    e.target.classList.toggle('selected'); // .toggle() provides ability to select and deselect
  }
});
