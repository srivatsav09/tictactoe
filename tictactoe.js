//console.log('connected!');

//RESTART
var restart = document.querySelector("#b");

//grabbing squares
var squares = document.querySelectorAll('td');

//clearing squares
function Clearboard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',Clearboard);
//check square marker

function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }
  else if(this.textContent === 'X'){
    this.textContent = 'O';
  }
  else{
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}



//for loop to add event listeners to all the squares
