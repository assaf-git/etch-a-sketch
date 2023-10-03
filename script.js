const container = document.querySelector('.container');

const gridShell = document.createElement('div');
gridShell.classList.add('gridShell');
container.appendChild(gridShell);

const gridSquares = [];

let counter = 0;

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


slider.addEventListener('change', function(){
    gridOutput.textContent = "Value: " + slider.value;
    console.log(gridOutput);
    console.log(slider.value);
    playGame();
})


gridOutput.textContent = "Value: " + slider.value;


function gridAssembly() {

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


function playGame() {

    if (counter > 0) {
        gridShell.replaceChildren();
        gridAssembly();
    } else {
        gridAssembly();
    }

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = 'black';
        });
    });
}
playGame();