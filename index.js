let color = "black";
let section = document.getElementById("section__one");
let numOfCells = document.getElementById("grid-size");
numOfCells.innerHTML = "16 x 16 pixels"

/*Create 16x16 Board*/
function createBoard(size){
  section.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  section.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size

  for (let i = 0; i < amount; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "lightgrey";
    cell.classList.add("cell");
    cell.addEventListener("mouseover", colorCell)
    section.insertAdjacentElement("beforeend", cell);
  }
}

createBoard(16);

/*Change Board size*/
let btnChange = document.getElementById("btn-size");
let input = document.getElementById("size");

btnChange.addEventListener("click", () =>{
	let size = input.value;
	if(size < 2 || size > 100){
		alert("Please enter a number between 2 and 100");
	    resetColor();
	}else{
	    resetColor();
		createBoard(size);
			    numOfCells.innerHTML = `${size} x ${size} pixels`

	}

});

/*change color of the cells*/
function colorCell(){
	if(color === "random"){
		this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
	}else {
		this.style.backgroundColor = color;
	}
}

function changeColor(choice){
	color = choice
}
function resetColor(){
	let cells = section.querySelectorAll("div");
	cells.forEach((div) => (div.style.backgroundColor = "lightgrey"));
}

let black = document.getElementById("black");
let white = document.getElementById("white");
let erase = document.getElementById("erase")
let random = document.getElementById("random");
let resetGrid = document.getElementById("reset");


black.addEventListener("click", () => { changeColor("black")});
white.addEventListener("click", () => { changeColor("white")});
erase.addEventListener("click", () => { changeColor("lightgrey")});
random.addEventListener("click", () => { changeColor("random")});
reset.addEventListener("click", resetColor);