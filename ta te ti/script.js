let currentPlayer = 'X';
let gameOver = false;
let board = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.querySelector('.reset-btn');

// Función para manejar el clic en una celda
function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameOver || board[index] !== '') return; // No hacer nada si ya hay un ganador o la celda está ocupada

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    
    if (checkWinner()) {
        status.textContent = `¡Jugador ${currentPlayer} ganó!`;
        gameOver = true;
    } else if (board.every(cell => cell !== '')) {
        status.textContent = '¡Empate!';
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Función para comprobar si hay un ganador
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Función para reiniciar el juego
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';
    status.textContent = '';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
}

// Añadir los eventos de clic en las celdas
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});
