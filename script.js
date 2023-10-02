const container = document.querySelector('.container');

const gridShell = document.createElement('div');
gridShell.classList.add('gridShell');
container.appendChild(gridShell);

let counter = 4;

for (i = 0; i < counter; i++) {
    const horizontal = document.createElement('div');
    horizontal.classList.add('horizontal');
    horizontal.setAttribute('id', i);
    gridShell.appendChild(horizontal);

    for (j = 0; j < counter; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', j);
        horizontal.appendChild(square);
    }
    
}
