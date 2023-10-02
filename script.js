const container = document.querySelector('.container');

const gridShell = document.createElement('div');
gridShell.classList.add('gridShell');
container.appendChild(gridShell);

let counter = 16;

for (i = 0; i < counter; i++) {
    const horizontal = document.createElement('div');
    horizontal.classList.add('horizontal');
    horizontal.setAttribute('id', i); //May be irrelevant
    gridShell.appendChild(horizontal);

    for (j = 0; j < counter; j++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        const squareNum = [(i + 1) * (j + 1)];
        squares.setAttribute('id', squareNum);
        horizontal.appendChild(squares);
        console.log(squareNum);
    }
    
}
