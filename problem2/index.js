const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
let userTurn = true;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));

}

function cellClicked() {
    if (!userTurn) {
        return;
    }
    if (this.style.backgroundColor === 'red' || this.style.backgroundColor === 'green') {
        return;
    }
    const cellIndex = this.getAttribute('cellIndex');
    const getElementsByCellIndex = document.querySelectorAll(`[cellIndex="${cellIndex}"]`);
    getElementsByCellIndex.forEach(cell => {
        cell.style.backgroundColor = 'red'
    });
    userTurn = false;
    setTimeout(computerTurn, 500)
}

function computerTurn() {
    const randomIndex = Math.floor(Math.random() * cells.length);
    const randomCell = cells[randomIndex];
    if (checkIfAllCellsAreFilled()) {
        return;
    }
    if (randomCell.style.backgroundColor === 'red' || randomCell.style.backgroundColor === 'green') {
        computerTurn();
        return;
    }
    randomCell.style.backgroundColor = 'green';
    userTurn = true;
}

function checkIfAllCellsAreFilled() {
    for (const cell of cells) {
        if (cell.style.backgroundColor === '') {
            return false;
        }
    }
    return true;
}