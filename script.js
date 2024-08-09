const easel = document.querySelector("#easel");
const GRID_HEIGHT = 800;
const BORDER_WIDTH = 1;
easel.style.height = `${GRID_HEIGHT}px`;
easel.style.width = `${GRID_HEIGHT}px`;

function createGrid(rowSize) {
    let squareHeight = GRID_HEIGHT/rowSize - 2*BORDER_WIDTH;
    for(let count = 0; count < rowSize*rowSize; count++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${squareHeight}px`;
        square.style.width = `${squareHeight}px`;
        square.style.border = `${BORDER_WIDTH}px solid black`;
        easel.appendChild(square);
    }
}

createGrid(16);

