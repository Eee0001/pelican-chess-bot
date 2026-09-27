/* ////////////////////////////////////////////////// */
/*                     PICK MOVES                     */
/* ////////////////////////////////////////////////// */

function generatePositionFromMove(position, move) {

    let p = structuredClone(position);
    //console.log(position,move);
    //console.log(position);
    p.WHITE[move[1]] = position.WHITE[move[0]];
    p.WHITE[move[0]] = 0;
    p.BLACK[move[1]] = position.BLACK[move[0]];
    p.BLACK[move[0]] = 0;
    p.MIXED[move[1]] = position.MIXED[move[0]];
    p.MIXED[move[0]] = 0;
    return p;

}

function findBestWhiteMove(position) {

    let start = performance.now();

    let bestmove1 = null;
    let bestscore1 = -999999;

    let position1 = position;

    let moves1 = getWhiteMoves(position1);

    moves1.forEach((move1)=>{

        let bestmove2 = null;
        let bestscore2 = 999999;

        let position2 = generatePositionFromMove(position1, move1);

        let moves2 = getBlackMoves(position2);

        moves2.forEach((move2)=>{

            let bestmove3 = null;
            let bestscore3 = -999999;

            let position3 = generatePositionFromMove(position2, move2);

            let moves3 = getWhiteMoves(position3);

            moves3.forEach((move3)=>{

                let bestmove4 = null;
                let bestscore4 = 999999;

                let position4 = generatePositionFromMove(position3, move3);

                let moves4 = getBlackMoves(position4);

                moves4.forEach((move4)=>{

                    let position5 = generatePositionFromMove(position4, move4);

                    let evaluation = evaluatePosition(position5);

                    let pointage = evaluation.white - evaluation.black;

                    if (pointage <= bestscore4) {
                        bestmove4 = move4;
                        bestscore4 = pointage;
                    }

                }
                );

                if (bestscore4 >= bestscore3) {
                    bestmove3 = move3;
                    bestscore3 = bestscore4;
                }

            }
            );

            if (bestscore3 <= bestscore2) {
                bestmove2 = move2;
                bestscore2 = bestscore3;
            }

        }
        );

        if (bestscore2 >= bestscore1) {
            bestmove1 = move1;
            bestscore1 = bestscore2;
        }

    }
    );

    console.log(bestmove1, ((performance.now() - start) / 1000) + ' Sec');

}

























function findBestBlackMove(position) {

    let start = performance.now();

    let bestmove1 = null;
    let bestscore1 = -99999999999999999999;

    let position1 = position;

    let moves1 = getBlackMoves(position1);

    moves1.forEach((move1)=>{

        let bestmove2 = null;
        let bestscore2 = 99999999999999999999;

        let position2 = generatePositionFromMove(position1, move1);

        let moves2 = getWhiteMoves(position2);

        moves2.forEach((move2)=>{

            let bestmove3 = null;
            let bestscore3 = -99999999999999999999;

            let position3 = generatePositionFromMove(position2, move2);

            let moves3 = getBlackMoves(position3);

            moves3.forEach((move3)=>{

                let bestmove4 = null;
                let bestscore4 = 99999999999999999999;

                let position4 = generatePositionFromMove(position3, move3);

                let moves4 = getWhiteMoves(position4);

                moves4.forEach((move4)=>{

                    let position5 = generatePositionFromMove(position4, move4);

                    let evaluation = evaluatePosition(position5);

                    let pointage = evaluation.black - evaluation.white;

                    if (pointage <= bestscore4) {
                        bestmove4 = move4;
                        bestscore4 = pointage;
                    }

                }
                );

                if (bestscore4 >= bestscore3) {
                    bestmove3 = move3;
                    bestscore3 = bestscore4;
                }

            }
            );

            if (bestscore3 <= bestscore2) {
                bestmove2 = move2;
                bestscore2 = bestscore3;
            }

        }
        );

        if (bestscore2 >= bestscore1) {
            bestmove1 = move1;
            bestscore1 = bestscore2;
        }

    }
    );

    console.log(bestmove1, 'Found in: ' + Math.trunc((performance.now() - start) / 10)/100 + ' Sec');
    
    if(position1.MIXED[bestmove1[1]]>0){
      BOARD[BOARD_ARRAY[bestmove1[1]]].replaceChild(BOARD[BOARD_ARRAY[bestmove1[0]]].firstChild,BOARD[BOARD_ARRAY[bestmove1[1]]].firstChild);
    }else{
      BOARD[BOARD_ARRAY[bestmove1[1]]].appendChild(BOARD[BOARD_ARRAY[bestmove1[0]]].firstChild);
    }
    
}