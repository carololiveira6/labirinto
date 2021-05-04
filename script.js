const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const maze = document.getElementById('maze');
const endGame = document.getElementById('victory')

for (let row = 0; row < map.length; row++) {

    const newElement = document.createElement('div');
    newElement.classList.add('rowCell');
    maze.appendChild(newElement);

    for(let col = 0; col < map[row].length; col++) {

        if (map[row][col] === 'W') {
           const newDiv = document.createElement('div');
           newDiv.classList.add('wall');
           newDiv.setAttribute("data-row", row);
           newDiv.setAttribute("data-col", col);
           newElement.appendChild(newDiv);
        } else if (map[row][col] === ' ') {
            const newDiv = document.createElement('div');
            newDiv.classList.add('hollow');
            newDiv.setAttribute("data-row", row);
            newDiv.setAttribute("data-col", col);
            newElement.appendChild(newDiv);
        } else if (map[row][col] === 'S') {
            const newDiv = document.createElement('div');
            newDiv.classList.add('start');
            newDiv.setAttribute('id','start');
            newDiv.setAttribute("data-row", row);
            newDiv.setAttribute("data-col", col);
            newElement.appendChild(newDiv);
        } else if (map[row][col] === 'F') {
            const newDiv = document.createElement('div')
            newDiv.classList.add('end');
            newDiv.setAttribute('id','end');
            newDiv.setAttribute("data-row", row);
            newDiv.setAttribute("data-col", col);
            newElement.appendChild(newDiv);
        };
    };
};

const player = document.createElement('div');
player.classList.add('player');
const start = document.getElementById('start');
start.appendChild(player);
const firstElement = player.parentElement;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    let boxTop = parseInt(player.parentElement.dataset.row);
    let boxLeft = parseInt(player.parentElement.dataset.col);
    
    if (keyName === 'ArrowUp') {
        boxTop -= 1;
    }

    if (keyName === 'ArrowDown') {
        boxTop += 1;
    }
    
    if (keyName === 'ArrowLeft') {
        boxLeft -= 1;
    }

    if (keyName === 'ArrowRight') {
        boxLeft += 1;
    }

    let newFirstElement = document.querySelector(`[data-row = '${boxTop}'][data-col = '${boxLeft}']`);

    if (newFirstElement.className === 'hollow') {
        newFirstElement.appendChild(player);
    } else if (newFirstElement.className === 'end') {
        newFirstElement.appendChild(player);
        maze.classList.add('hidden');
        endGame.classList.remove('hidden');
    }
});