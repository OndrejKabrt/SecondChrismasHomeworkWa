const deska = document.getElementById('deska');
const status = document.getElementById('status');
const restartHry = document.getElementById('restart-hry');

let aktualniHrac = 'X';
let hraciDeska = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
let gameActive = true;


for (let i = 0; i < 49; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', handleCellClick);
    deska.appendChild(cell);
}

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (hraciDeska[index] === '' && gameActive) {
        hraciDeska[index] = aktualniHrac;
        event.target.textContent = aktualniHrac;
        if (checkWinner()) {
            status.textContent = `Hráč ${aktualniHrac} vyhrál!`;
            gameActive = false;
        } else if (hraciDeska.every(cell => cell !== '')) {
            status.textContent = "Je to remíza";
            gameActive = false;
        } else {
            aktualniHrac = aktualniHrac === 'X' ? 'O' : 'X';
            status.textContent = `Hráč ${aktualniHrac} hraje`;
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2, 3, 4], [1, 2, 3, 4, 5], [2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11], [8, 9, 10, 11, 12], [9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18], [15, 16, 17, 18, 19], [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25], [22, 23, 24, 25, 26], [23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32], [29, 30, 31, 32, 33], [30, 31, 32, 33, 34],
        [35, 36, 37, 38, 39], [36, 37, 38, 39, 40], [37, 38, 39, 40, 41],
        [42, 43, 44, 45, 46], [43, 44, 45, 46, 47], [44, 45, 46, 47, 48],
        
        [0, 7, 14, 21, 28], [1, 8, 15, 22, 29], [2, 9, 16, 23, 30],
        [3, 10, 17, 24, 31], [4, 11, 18, 25, 32], [5, 12, 19, 26, 33],
        [6, 13, 20, 27, 34], [7, 14, 21, 28, 35], [8, 15, 22, 29, 36],
        [9, 16, 23, 30, 37], [10, 17, 24, 31, 38], [11, 18, 25, 32, 39],
        [12, 19, 26, 33, 40], [13, 20, 27, 34, 41], [14, 21, 28, 35, 42],
        [15, 22, 29, 36, 43], [16, 23, 30, 37, 44], [17, 24, 31, 38, 45],
        [18, 25, 32, 39, 46], [19, 26, 33, 40, 47], [20, 27, 34, 41, 48],
        
        [0, 8, 16, 24, 32],[1, 9, 17, 25, 33],[2, 10, 18, 26, 34],
        [ 9, 17, 25, 33,41],[ 8, 16, 24, 32,40],[ 16, 24, 32,40,48],
        [7,15,23,31,39],[15,23,31,39,47],[14, 22, 30, 38, 46],

        [4,10,16,22,28],[5,11,17,23,29],[11,17,23,29,37],
        [6, 12, 18, 24, 30],[12, 18, 24, 30,36],[18, 24, 30,36,42],
        [13, 19, 25, 31, 37],[ 19, 25, 31, 37,43],[20, 26, 32, 38, 44],

    ];


for (const vyhra of winningCombinations) {
    const [a, b, c, d, e]  = vyhra;
    if (hraciDeska[a] !== '' && hraciDeska[a] === hraciDeska[b] && hraciDeska[a] === hraciDeska[c] && hraciDeska[a] === hraciDeska[d] && hraciDeska[a] === hraciDeska[e]) {
        return true;
    }
}
return false;
}


function restartGame() {
    hraciDeska = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    gameActive = true;
    aktualniHrac = 'X';
    status.textContent = `Hráč ${aktualniHrac} hraje`;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}

// Event listener for the restart button
restartHry.addEventListener('click', restartGame);