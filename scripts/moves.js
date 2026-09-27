/* ////////////////////////////////////////////////// */
/*                    MOVE FINDING                    */
/* ////////////////////////////////////////////////// */

function getWhiteMoves(s) {
    let h = [];
    for (let e = 0; e < 64; e++)
        switch (s.WHITE[e]) {
        case PAWN_CODE:
            e > 7 && (0 === s.MIXED[e - 8] && h.push([e, e - 8]),
            6 === Math.floor(e / 8) && 0 === s.MIXED[e - 8] && 0 === s.MIXED[e - 16] && h.push([e, e - 16]),
            e % 8 > 0 && s.BLACK[e - 9] > 0 && h.push([e, e - 9]),
            e % 8 < 7 && s.BLACK[e - 7] > 0 && h.push([e, e - 7]));
            break;
        case KNIGHT_CODE:
            e > 15 && (e % 8 > 0 && 0 === s.WHITE[e - 17] && h.push([e, e - 17]),
            e % 8 < 7 && 0 === s.WHITE[e - 15] && h.push([e, e - 15])),
            e > 7 && (e % 8 > 1 && 0 === s.WHITE[e - 10] && h.push([e, e - 10]),
            e % 8 < 6 && 0 === s.WHITE[e - 6] && h.push([e, e - 6])),
            e < 56 && (e % 8 > 1 && 0 === s.WHITE[e + 6] && h.push([e, e + 6]),
            e % 8 < 6 && 0 === s.WHITE[e + 10] && h.push([e, e + 10])),
            e < 48 && (e % 8 > 0 && 0 === s.WHITE[e + 15] && h.push([e, e + 15]),
            e % 8 < 7 && 0 === s.WHITE[e + 17] && h.push([e, e + 17]));
            break;
        case BISHOP_CODE:
            for (let o = 0; o < Math.min(e % 8, Math.floor(e / 8)) && !(s.WHITE[e - 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 9 * (o + 1)] && h.push([e, e - 9 * (o + 1)]),
                s.BLACK[e - 9 * (o + 1)] > 0) {
                    h.push([e, e - 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(e % 8, Math.floor(e / 8)) && !(s.WHITE[e + 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 9 * (o + 1)] && h.push([e, e + 9 * (o + 1)]),
                s.BLACK[e + 9 * (o + 1)] > 0) {
                    h.push([e, e + 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < Math.min(7 - e % 8, Math.floor(e / 8)) && !(s.WHITE[e - 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 7 * (o + 1)] && h.push([e, e - 7 * (o + 1)]),
                s.BLACK[e - 7 * (o + 1)] > 0) {
                    h.push([e, e - 7 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(7 - e % 8, Math.floor(e / 8)) && !(s.WHITE[e + 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 7 * (o + 1)] && h.push([e, e + 7 * (o + 1)]),
                s.BLACK[e + 7 * (o + 1)] > 0) {
                    h.push([e, e + 7 * (o + 1)]);
                    break
                }
            break;
        case ROOK_CODE:
            for (let o = 0; o < e % 8 && !(s.WHITE[e - o - 1] > 0); o++)
                if (0 === s.MIXED[e - o - 1] && h.push([e, e - o - 1]),
                s.BLACK[e - o - 1] > 0) {
                    h.push([e, e - o - 1]);
                    break
                }
            for (let o = 0; o < 7 - e % 8 && !(s.WHITE[e + o + 1] > 0); o++)
                if (0 === s.MIXED[e + o + 1] && h.push([e, e + o + 1]),
                s.BLACK[e + o + 1] > 0) {
                    h.push([e, e + o + 1]);
                    break
                }
            for (let o = 0; o < Math.floor(e / 8) && !(s.WHITE[e - 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 8 * (o + 1)] && h.push([e, e - 8 * (o + 1)]),
                s.BLACK[e - 8 * (o + 1)] > 0) {
                    h.push([e, e - 8 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.floor(e / 8) && !(s.WHITE[e + 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 8 * (o + 1)] && h.push([e, e + 8 * (o + 1)]),
                s.BLACK[e + 8 * (o + 1)] > 0) {
                    h.push([e, e + 8 * (o + 1)]);
                    break
                }
            break;
        case QUEEN_CODE:
            for (let o = 0; o < Math.min(e % 8, Math.floor(e / 8)) && !(s.WHITE[e - 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 9 * (o + 1)] && h.push([e, e - 9 * (o + 1)]),
                s.BLACK[e - 9 * (o + 1)] > 0) {
                    h.push([e, e - 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(e % 8, Math.floor(e / 8)) && !(s.WHITE[e + 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 9 * (o + 1)] && h.push([e, e + 9 * (o + 1)]),
                s.BLACK[e + 9 * (o + 1)] > 0) {
                    h.push([e, e + 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < Math.min(7 - e % 8, Math.floor(e / 8)) && !(s.WHITE[e - 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 7 * (o + 1)] && h.push([e, e - 7 * (o + 1)]),
                s.BLACK[e - 7 * (o + 1)] > 0) {
                    h.push([e, e - 7 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(7 - e % 8, Math.floor(e / 8)) && !(s.WHITE[e + 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 7 * (o + 1)] && h.push([e, e + 7 * (o + 1)]),
                s.BLACK[e + 7 * (o + 1)] > 0) {
                    h.push([e, e + 7 * (o + 1)]);
                    break
                }
            for (let o = 0; o < e % 8 && !(s.WHITE[e - o - 1] > 0); o++)
                if (0 === s.MIXED[e - o - 1] && h.push([e, e - o - 1]),
                s.BLACK[e - o - 1] > 0) {
                    h.push([e, e - o - 1]);
                    break
                }
            for (let o = 0; o < 7 - e % 8 && !(s.WHITE[e + o + 1] > 0); o++)
                if (0 === s.MIXED[e + o + 1] && h.push([e, e + o + 1]),
                s.BLACK[e + o + 1] > 0) {
                    h.push([e, e + o + 1]);
                    break
                }
            for (let o = 0; o < Math.floor(e / 8) && !(s.WHITE[e - 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 8 * (o + 1)] && h.push([e, e - 8 * (o + 1)]),
                s.BLACK[e - 8 * (o + 1)] > 0) {
                    h.push([e, e - 8 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.floor(e / 8) && !(s.WHITE[e + 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 8 * (o + 1)] && h.push([e, e + 8 * (o + 1)]),
                s.BLACK[e + 8 * (o + 1)] > 0) {
                    h.push([e, e + 8 * (o + 1)]);
                    break
                }
            break;
        case KING_CODE:
            e > 7 && (e % 8 > 0 && 0 === s.WHITE[e - 9] && h.push([e, e - 9]),
            0 === s.WHITE[e - 8] && h.push([e, e - 8]),
            e % 8 < 7 && 0 === s.WHITE[e - 7] && h.push([e, e - 7])),
            e % 8 > 0 && 0 === s.WHITE[e - 1] && h.push([e, e - 1]),
            e % 8 < 7 && 0 === s.WHITE[e + 1] && h.push([e, e + 1]),
            e < 56 && (e % 8 > 0 && 0 === s.WHITE[e + 7] && h.push([e, e + 7]),
            0 === s.WHITE[e + 8] && h.push([e, e + 8]),
            e % 8 < 7 && 0 === s.WHITE[e + 9] && h.push([e, e + 9]))
        }
    return h
}

function getBlackMoves(s) {
    let h = [];
    for (let e = 0; e < 64; e++)
        switch (s.BLACK[e]) {
        case PAWN_CODE:
            e < 56 && (0 === s.MIXED[e + 8] && h.push([e, e + 8]),
            1 === Math.floor(e / 8) && 0 === s.MIXED[e + 8] && 0 === s.MIXED[e + 16] && h.push([e, e + 16]),
            e % 8 > 0 && s.WHITE[e + 7] > 0 && h.push([e, e + 7]),
            e % 8 < 7 && s.WHITE[e + 9] > 0 && h.push([e, e + 9]));
            break;
        case KNIGHT_CODE:
            e > 15 && (e % 8 > 0 && 0 === s.BLACK[e - 17] && h.push([e, e - 17]),
            e % 8 < 7 && 0 === s.BLACK[e - 15] && h.push([e, e - 15])),
            e > 7 && (e % 8 > 1 && 0 === s.BLACK[e - 10] && h.push([e, e - 10]),
            e % 8 < 6 && 0 === s.BLACK[e - 6] && h.push([e, e - 6])),
            e < 56 && (e % 8 > 1 && 0 === s.BLACK[e + 6] && h.push([e, e + 6]),
            e % 8 < 6 && 0 === s.BLACK[e + 10] && h.push([e, e + 10])),
            e < 48 && (e % 8 > 0 && 0 === s.BLACK[e + 15] && h.push([e, e + 15]),
            e % 8 < 7 && 0 === s.BLACK[e + 17] && h.push([e, e + 17]));
            break;
        case BISHOP_CODE:
            for (let o = 0; o < Math.min(e % 8, Math.floor(e / 8)) && !(s.BLACK[e - 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 9 * (o + 1)] && h.push([e, e - 9 * (o + 1)]),
                s.WHITE[e - 9 * (o + 1)] > 0) {
                    h.push([e, e - 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(e % 8, Math.floor(e / 8)) && !(s.BLACK[e + 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 9 * (o + 1)] && h.push([e, e + 9 * (o + 1)]),
                s.WHITE[e + 9 * (o + 1)] > 0) {
                    h.push([e, e + 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < Math.min(7 - e % 8, Math.floor(e / 8)) && !(s.BLACK[e - 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 7 * (o + 1)] && h.push([e, e - 7 * (o + 1)]),
                s.WHITE[e - 7 * (o + 1)] > 0) {
                    h.push([e, e - 7 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(7 - e % 8, Math.floor(e / 8)) && !(s.BLACK[e + 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 7 * (o + 1)] && h.push([e, e + 7 * (o + 1)]),
                s.WHITE[e + 7 * (o + 1)] > 0) {
                    h.push([e, e + 7 * (o + 1)]);
                    break
                }
            break;
        case ROOK_CODE:
            for (let o = 0; o < e % 8 && !(s.BLACK[e - o - 1] > 0); o++)
                if (0 === s.MIXED[e - o - 1] && h.push([e, e - o - 1]),
                s.WHITE[e - o - 1] > 0) {
                    h.push([e, e - o - 1]);
                    break
                }
            for (let o = 0; o < 7 - e % 8 && !(s.BLACK[e + o + 1] > 0); o++)
                if (0 === s.MIXED[e + o + 1] && h.push([e, e + o + 1]),
                s.WHITE[e + o + 1] > 0) {
                    h.push([e, e + o + 1]);
                    break
                }
            for (let o = 0; o < Math.floor(e / 8) && !(s.BLACK[e - 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 8 * (o + 1)] && h.push([e, e - 8 * (o + 1)]),
                s.WHITE[e - 8 * (o + 1)] > 0) {
                    h.push([e, e - 8 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.floor(e / 8) && !(s.BLACK[e + 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 8 * (o + 1)] && h.push([e, e + 8 * (o + 1)]),
                s.WHITE[e + 8 * (o + 1)] > 0) {
                    h.push([e, e + 8 * (o + 1)]);
                    break
                }
            break;
        case QUEEN_CODE:
            for (let o = 0; o < Math.min(e % 8, Math.floor(e / 8)) && !(s.BLACK[e - 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 9 * (o + 1)] && h.push([e, e - 9 * (o + 1)]),
                s.WHITE[e - 9 * (o + 1)] > 0) {
                    h.push([e, e - 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(e % 8, Math.floor(e / 8)) && !(s.BLACK[e + 9 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 9 * (o + 1)] && h.push([e, e + 9 * (o + 1)]),
                s.WHITE[e + 9 * (o + 1)] > 0) {
                    h.push([e, e + 9 * (o + 1)]);
                    break
                }
            for (let o = 0; o < Math.min(7 - e % 8, Math.floor(e / 8)) && !(s.BLACK[e - 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 7 * (o + 1)] && h.push([e, e - 7 * (o + 1)]),
                s.WHITE[e - 7 * (o + 1)] > 0) {
                    h.push([e, e - 7 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.max(7 - e % 8, Math.floor(e / 8)) && !(s.BLACK[e + 7 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 7 * (o + 1)] && h.push([e, e + 7 * (o + 1)]),
                s.WHITE[e + 7 * (o + 1)] > 0) {
                    h.push([e, e + 7 * (o + 1)]);
                    break
                }
            for (let o = 0; o < e % 8 && !(s.BLACK[e - o - 1] > 0); o++)
                if (0 === s.MIXED[e - o - 1] && h.push([e, e - o - 1]),
                s.WHITE[e - o - 1] > 0) {
                    h.push([e, e - o - 1]);
                    break
                }
            for (let o = 0; o < 7 - e % 8 && !(s.BLACK[e + o + 1] > 0); o++)
                if (0 === s.MIXED[e + o + 1] && h.push([e, e + o + 1]),
                s.WHITE[e + o + 1] > 0) {
                    h.push([e, e + o + 1]);
                    break
                }
            for (let o = 0; o < Math.floor(e / 8) && !(s.BLACK[e - 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e - 8 * (o + 1)] && h.push([e, e - 8 * (o + 1)]),
                s.WHITE[e - 8 * (o + 1)] > 0) {
                    h.push([e, e - 8 * (o + 1)]);
                    break
                }
            for (let o = 0; o < 7 - Math.floor(e / 8) && !(s.BLACK[e + 8 * (o + 1)] > 0); o++)
                if (0 === s.MIXED[e + 8 * (o + 1)] && h.push([e, e + 8 * (o + 1)]),
                s.WHITE[e + 8 * (o + 1)] > 0) {
                    h.push([e, e + 8 * (o + 1)]);
                    break
                }
            break;
        case KING_CODE:
            e > 7 && (e % 8 > 0 && 0 === s.BLACK[e - 9] && h.push([e, e - 9]),
            0 === s.BLACK[e - 8] && h.push([e, e - 8]),
            e % 8 < 7 && 0 === s.BLACK[e - 7] && h.push([e, e - 7])),
            e % 8 > 0 && 0 === s.BLACK[e - 1] && h.push([e, e - 1]),
            e % 8 < 7 && 0 === s.BLACK[e + 1] && h.push([e, e + 1]),
            e < 56 && (e % 8 > 0 && 0 === s.BLACK[e + 7] && h.push([e, e + 7]),
            0 === s.BLACK[e + 8] && h.push([e, e + 8]),
            e % 8 < 7 && 0 === s.BLACK[e + 9] && h.push([e, e + 9]))
        }
    return h
}