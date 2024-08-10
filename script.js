const easel = document.querySelector("#easel");
const GRID_HEIGHT = 800;
let gridCount = 0; 
easel.style.height = `${GRID_HEIGHT}px`;
easel.style.width = `${GRID_HEIGHT}px`;
let squares;

function createGrid(rowSize) {
    let squareDimen = 1/(rowSize)*100;
    gridCount = rowSize*rowSize;
    for(let count = 0; count < gridCount; count++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${squareDimen}%`;
        square.style.width = `${squareDimen}%`;
        square.classList.add("grid-line");
        square.addEventListener("mouseenter", () => {
            square.classList.add("filled");
        });
        easel.appendChild(square);
    }
    squares = document.querySelectorAll(".square");
}

createGrid(16);

function clearGrid() {
    squares.forEach((square) => {
        easel.removeChild(square);
    })
}

const resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", () => {
    let size = +(prompt("What do you want the new row size to be? (max = 100)"));
    if(size === null) {
        return;
    }
    if(isNaN(size) || size > 100) {
        size = +(prompt("Please enter a valid size (max = 100)."));
    }
    clearGrid();
    createGrid(size);
});

const gridBtn = document.querySelector("#toggle-grid");
gridBtn.addEventListener("click", () => {
    squares.forEach((square) => {
        square.classList.toggle("grid-line");
    })
});

const randBtn = document.querySelector("#random-color");
randBtn.addEventListener("click", () => {
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            let randRed = Math.round(Math.random() * 255);
            let randBlue = Math.round(Math.random() * 255);
            let randGreen = Math.round(Math.random() * 255);
            let randColor = `rgb(${randRed} ${randBlue} ${randGreen})`;
            if(!square.classList.contains("filled")) {
                square.style.backgroundColor = randColor;
            }
        })
    })
})