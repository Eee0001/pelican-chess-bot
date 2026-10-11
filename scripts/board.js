const chessboard = document.getElementById("chessboard");

function createBoard () {
    for (let i = 0; i < 64; i++) {
        let tile = document.createElement("div");

        tile.setAttribute("data-index", i);

        tile.setAttribute("data-piece", NAMES[PIECES.EMPTY]);

        tile.classList.add("tile");

        chessboard.appendChild(tile);
    }
}

createBoard();

function renderBoard (position) {
    for (let i = 0; i < 64; i++) {
        chessboard.children[i].dataset.piece = NAMES[position[i]];
    }
}

renderBoard([
    12, 11, 10, 13, 14, 10, 11, 12,
    9 , 9 , 9 , 9 , 9 , 9 , 9 , 9 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ,
    1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,
    4 , 3 , 2 , 5 , 6 , 2 , 3 , 4
]);

let selected = null;

chessboard.onpointerdown = function (e) {
    console.log(e.target);
    selected = e.target;

    ghost.dataset.piece = selected.dataset.piece;
};

chessboard.onpointerup = function (e) {
    console.log(e.target);

    let piece = selected.dataset.piece;

    selected.dataset.piece = NAMES[PIECES.EMPTY];

    e.target.dataset.piece = piece;

    ghost.dataset.piece = NAMES[PIECES.EMPTY];

    selected = null;
};

let ghost = document.createElement("div");

ghost.id = "ghost";

ghost.setAttribute("data-piece", NAMES[PIECES.EMPTY]);

ghost.classList.add("tile");

document.body.appendChild(ghost);

chessboard.onpointermove = function (e) {
    ghost.style.translate = ""+e.clientX+"px "+e.clientY+"px"
};