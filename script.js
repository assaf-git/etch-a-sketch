const container = document.querySelector('.container');

const gridShell = document.createElement('div');
gridShell.classList.add('gridShell');
container.appendChild(gridShell);

let counter = 16;

let gridCounter = 0; //May be irrelevant

const gridSquares = [];



for (i = 0; i < counter; i++) {
    const horizontal = document.createElement('div');
    horizontal.classList.add('horizontal');
    horizontal.setAttribute('id', i); //May be irrelevant
    gridShell.appendChild(horizontal);

    for (j = 0; j < counter; j++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        squares.setAttribute('id', j); //May be irrelevant
        horizontal.appendChild(squares);
        gridSquares.push(squares);
        gridCounter++; //May be irrelevant
    }
}

console.log(gridSquares);