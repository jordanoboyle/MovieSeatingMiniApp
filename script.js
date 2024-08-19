const container   = document.querySelector('.container');
const seats       = document.querySelectorAll('.row .seat:not(.occupied)');  //remember that we have a few different seat options here which is why we used querySelectorAll(). "Returns all element descendats of node that match selectors"
const count       = document.getElementById('count');
const total       = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;  //parseInt() is an option. 
console.log(ticketPrice);  //not dynamic but locks in the initial value from the drop down movie prices
console.log(typeof ticketPrice); //We would like this to be a number (parse or use '+' operator on movieSelect.value)

//Save Selected Movie and Price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Update total and count:
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected'); //creates a node list
  // console.log(selectedSeats); 

  //Storing in Local Storage:
  const seatsIndex = [...selectedSeats].map(seat => {
    return [...seats].indexOf(seat);
  });
  console.log("The Seat indexes are " + seatsIndex);
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


  const selectSeatsCount = selectedSeats.length;  //provides us a the total number of seats we selected
  console.log(selectSeatsCount);

  count.innerText = selectSeatsCount;  // observe comment in index.html for effect
  total.innerText = selectSeatsCount * ticketPrice;


}

//Get Data from LocalStorage and Populate UI
function populateUI () {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  console.log(selectedSeats);

  //Here we are checking the contents of local storage (you may be using a backend here)
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//Event Listeners
//Movie Selection Event
movieSelect.addEventListener('change', e => {  // note diff here, 'change', which activates on DD selected
  ticketPrice = parseInt(e.target.value);  // make sure ticketPrice is let not const
  console.log(
    "Selected Movie index and title:", 
    e.target.selectedIndex,
    e.target.options[e.target.selectedIndex].textContent
  );
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//Seat Click Event
container.addEventListener('click', (e) => {
  // console.log(e.target);  //shows us the exact element that is clicked on
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied') //ensuring the click only registers 
  ) {
    console.log(e.target); //shows us the class of 'seat' in the console.
    e.target.classList.toggle('selected'); // .toggle() provides ability to select and deselect

    updateSelectedCount();
  }
});

//Initial Count and Total Set:
updateSelectedCount();  //

//Example of Spread operator

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2); 
//High level, spread operator takes the values from the array and injects them wherever you desire