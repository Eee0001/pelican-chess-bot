const PIECES = Object.freeze({
    EMPTY: 0b0000, PAWN: 0b0001, KNIGHT: 0b0010, BISHOP: 0b0011, ROOK: 0b0100, QUEEN: 0b0101, KING: 0b0110
});

const FLAGS = Object.freeze({
    TYPE: 0b0111, COLOR: 0b1000, WHITE: 0b0000, BLACK: 0b1000
});

const NAMES = (()=>{
    const names = {};

    for (let [name, piece] of Object.entries(PIECES)) {
        let lower = name.toLowerCase();

        if (piece === PIECES.EMPTY) {
            names[piece] = lower;
            continue;
        }

        names[piece | FLAGS.WHITE] = `white-${lower}`;
        names[piece | FLAGS.BLACK] = `black-${lower}`;
    }

    return Object.freeze(names);
})();