const container = document.querySelector('.container');

const black = document.querySelector('.black');

const rainbow = document.querySelector('.rainbow');

const color = document.querySelector('.color');
const colorPicker = document.querySelector('.color-picker');
// colorPicker.setAttribute('type', 'color');
// container.appendChild(color);
// container.appendChild(colorPicker);
// color.textContent = "Colour";

const reset = document.querySelector('.reset');

const shading = document.querySelector('.shading');

const lighting = document.querySelector('.lighting');

const gridShell = document.querySelector('.grid-shell');


const gridSquares = [];

let counter = 0;

let colorSelection = 'black';
console.log(colorSelection);

let randomSelection;

const sliderContainer = document.querySelector('.slide-container');
const slider = document.querySelector('.slider');
const gridOutput = document.querySelector('.grid-output');
// sliderContainer.appendChild(slider);
// sliderContainer.appendChild(gridOutput);
// container.appendChild(sliderContainer);


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
    
    if (colorSelection === 'black' || colorSelection == colorPicker.value) {
        gridSquares.forEach(gridSquare => {
            gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = colorSelection;
            console.log(colorSelection);
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

    color.addEventListener('click', () => {
        colorSelection = colorPicker.value;
        eachGridSquare();
        console.log(colorPicker.value);
    });

    reset.addEventListener('click', () => {
        gridShell.replaceChildren();
        gridAssembly();
    });
    return colorSelection;
}
playGame();