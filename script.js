const easel = document.querySelector("#easel");
const GRID_HEIGHT = 800;
let BORDER_WIDTH = 1;
easel.style.height = `${GRID_HEIGHT}px`;
easel.style.width = `${GRID_HEIGHT}px`;

function createGrid(rowSize) {
    let squareDimen = 1/(rowSize)*100;
    for(let count = 0; count < rowSize*rowSize; count++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = `${squareDimen}%`;
        square.style.width = `${squareDimen}%`;
        square.style.border = `${BORDER_WIDTH}px solid gray`;
        easel.appendChild(square);
    }
}

createGrid(16);

