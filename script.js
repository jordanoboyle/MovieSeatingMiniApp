const container   = document.querySelector('.container');
const seats       = document.querySelectorAll('.row .seat:not(occupied)');  //remember that we have a few different seat options here which is why we used querySelectorAll(). "Returns all element descendats of node that match selectors"
const count       = document.getElementById('count');
const total       = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = movieSelect.value;
console.log(ticketPrice);  //not dynamic but locks in the initial value from the drop down movie prices
