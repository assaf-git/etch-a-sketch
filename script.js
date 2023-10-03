const container = document.querySelector('.container');

const black = document.createElement('button');
black.classList.add('black');
container.appendChild(black);
black.textContent = "Black";

const rainbow = document.createElement('button');
rainbow.classList.add('rainbow');
container.appendChild(rainbow);
rainbow.textContent = "Rainbow";

const color = document.createElement('button');
color.classList.add('color');
container.appendChild(color);
color.textContent = "Colour";

const reset = document.createElement('button');
reset.classList.add('reset');
container.appendChild(reset);
reset.textContent = "Reset";

const gridShell = document.createElement('div');
gridShell.classList.add('gridShell');
container.appendChild(gridShell);

const gridSquares = [];

let counter = 0;

let colorSelection = 'black';

let randomSelection;

const sliderContainer = document.createElement('div');
const slider = document.createElement('input');
const gridOutput = document.createElement('p');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '4');
slider.setAttribute('max', '64');
slider.setAttribute('step', '1');
slider.setAttribute('value', '16');
sliderContainer.appendChild(slider);
sliderContainer.appendChild(gridOutput);
container.appendChild(sliderContainer);


slider.addEventListener('change', () => {
    playGame();
})


function gridAssembly() {

    gridOutput.textContent = `Grid: ${slider.value} x ${slider.value}`;

    for (i = 0; i < slider.value; i++) {
        const horizontal = document.createElement('div');
        horizontal.classList.add('horizontal');
        horizontal.setAttribute('id', i); //May be irrelevant
        gridShell.appendChild(horizontal);
    
        for (j = 0; j < slider.value; j++) {
            const squares = document.createElement('div');
            squares.classList.add('square');
            squares.setAttribute('id', j); //May be irrelevant
            horizontal.appendChild(squares);
            gridSquares.push(squares);
        }
    }
    return counter++;
}


  function eachGridSquare() {   
    
    if (colorSelection === 'black') {
        gridSquares.forEach(gridSquare => {
            gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = colorSelection;
            });
        });
    }

    else if (colorSelection === randomSelection) {
        gridSquares.forEach(gridSquare => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = "#" + randomColor;
            });
        });
    }
}


function playGame() {

    if (counter > 0) {
        gridShell.replaceChildren();
        gridAssembly();
    } else {
        gridAssembly();
    }

    eachGridSquare();

    black.addEventListener('click', () => {
        colorSelection = 'black';
        eachGridSquare();
    });

    rainbow.addEventListener('click', () => {
        colorSelection = randomSelection;
        eachGridSquare();
    });

    return colorSelection;
}
playGame();