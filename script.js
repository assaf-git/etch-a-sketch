const container = document.querySelector('.container');

for (i = 0; i < 2; i++) {
    const horizontal = document.createElement('div');
    horizontal.classList.add('horizontal');
    horizontal.setAttribute('id', i);
    container.appendChild(horizontal);

    for (j = 0; j < 2; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', j);
        square.appendChild(horizontal);
    }
    
}
