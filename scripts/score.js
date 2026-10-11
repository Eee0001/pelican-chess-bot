/* ////////////////////////////////////////////////// */
/*                  BOARD EVALUATION                  */
/* ////////////////////////////////////////////////// */

function evaluatePosition(POSITION) {

    let score = {
        white: 0,
        black: 0,
    };

    for (let i = 0; i < 64; i++) {
        switch (POSITION.WHITE[i]) {

        case PAWN_CODE:
            score.white += 1;
            if (POSITION.WHITE[i - 8] > 0) {
                score.white -= 0.1;
            }
            if(i === 27 || i === 28 || i === 35 || i === 36){
              score.white += 0.2;
            }
            break;

        case KNIGHT_CODE:
            score.white += 3;
            if (i === 28 || i === 45 || i === 27 || i === 42) {
                score.white += 0.5;
            }
            break;

        case BISHOP_CODE:
            score.white += 3;
            if (i === 49 || i === 34 || i === 54 || i === 36) {
                score.white += 0.5;
            }
            break;

        case ROOK_CODE:
            score.white += 5;
            break;

        case QUEEN_CODE:
            score.white += 9;
            break;

        case KING_CODE:
            score.white += 1000;
            break;

        }
    }

    for (let i = 0; i < 64; i++) {
        switch (POSITION.BLACK[i]) {

        case PAWN_CODE:
            score.black += 1;
            if (POSITION.BLACK[i + 8] > 0) {
                score.black -= 0.1;
            }
            if(i === 27 || i === 28 || i === 35 || i === 36){
              score.white += 0.2;
            }
            break;

        case KNIGHT_CODE:
            score.black += 3;
            if (i === 18 || i === 21 || i === 35 || i === 36) {
                score.black += 0.5;
            }
            break;

        case BISHOP_CODE:
            score.black += 3;
            if (i === 9 || i === 14 || i === 26 || i === 29) {
                score.black += 0.5;
            }
            break;

        case ROOK_CODE:
            score.black += 5;
            break;

        case QUEEN_CODE:
            score.black += 9;
            break;

        case KING_CODE:
            score.black += 1000;
            break;

        }
    }

    return score;

}