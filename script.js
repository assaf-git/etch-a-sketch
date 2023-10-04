const container = document.querySelector('.container');

const black = document.querySelector('.black');

const rainbow = document.querySelector('.rainbow');

const color = document.querySelector('.color');
const colorPicker = document.querySelector('.color-picker');

const reset = document.querySelector('.reset');

const shading = document.querySelector('.shading');

const gridShell = document.querySelector('.grid-shell');

const sliderContainer = document.querySelector('.slide-container');
const slider = document.querySelector('.slider');
const gridOutput = document.querySelector('.grid-output');

const gridSquares = [];

let counter = 0;

let colorSelection = 'black';

let randomSelection;


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

    else if (colorSelection === shading) {
        gridSquares.forEach(gridSquare => {
            gridSquare.addEventListener('click', () => {
                let currentBrightness = gridSquare.dataset.brightness || 100;
                currentBrightness = parseInt(currentBrightness) - 10;

                if (currentBrightness >= 0) {
                    gridSquare.style.filter = `brightness(${currentBrightness}%)`;
                    gridSquare.dataset.brightness = currentBrightness;
                }
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
    });

    reset.addEventListener('click', () => {
        gridShell.replaceChildren();
        gridAssembly();
    });

    shading.addEventListener('click', () => {
        colorSelection = shading;
        eachGridSquare();
    })

    return colorSelection;
}
playGame();