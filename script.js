const easel = document.querySelector("#easel");
const GRID_HEIGHT = 1000;

easel.style.height = `${GRID_HEIGHT}px`;
easel.style.width = `${GRID_HEIGHT}px`;

function createGrid(rowSize) {
    let squareHeight = GRID_HEIGHT/rowSize;
    for(let count = 0; count < rowSize*rowSize; count++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${squareHeight}px`;
        square.style.width = `${squareHeight}px`;
        easel.appendChild(square);
    }
}

createGrid(16);

