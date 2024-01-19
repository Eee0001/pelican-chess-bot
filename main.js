/* ////////////////////////////////////////////////// */
/*                     CHESSBOARD                     */
/* ////////////////////////////////////////////////// */

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const BOARD_ELEMENT = document.getElementById("board");

const BOARD = {};

[...BOARD_ELEMENT.children].forEach((row)=>{
    [...row.children].forEach((tile)=>{
        BOARD[tile.id] = tile;
    }
    );
}
);

const BOARD_ARRAY = Object.keys(BOARD);

const WHITE_PAWN_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PHBhdGggZD0iTTIyLjUgOWMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzE3LjMzIDE2LjUgMTYgMTguNTkgMTYgMjFjMCAyLjAzLjk0IDMuODQgMi40MSA1LjAzLTMgMS4wNi03LjQxIDUuNTUtNy40MSAxMy40N2gyM2MwLTcuOTItNC40MS0xMi40MS03LjQxLTEzLjQ3IDEuNDctMS4xOSAyLjQxLTMgMi40MS01LjAzIDAtMi40MS0xLjMzLTQuNS0zLjI4LTUuNjIuNDktLjY3Ljc4LTEuNDkuNzgtMi4zOCAwLTIuMjEtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";
const WHITE_KNIGHT_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxMGMxMC41IDEgMTYuNSA4IDE2IDI5SDE1YzAtOSAxMC02LjUgOC0yMSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNCAxOGMuMzggMi45MS01LjU1IDcuMzctOCA5LTMgMi0yLjgyIDQuMzQtNSA0LTEuMDQyLS45NCAxLjQxLTMuMDQgMC0zLTEgMCAuMTkgMS4yMy0xIDItMSAwLTQuMDAzIDEtNC00IDAtMiA2LTEyIDYtMTJzMS44OS0xLjkgMi0zLjVjLS43My0uOTk0LS41LTItLjUtMyAxLTEgMyAyLjUgMyAyLjVoMnMuNzgtMS45OTIgMi41LTNjMSAwIDEgMyAxIDMiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNOS41IDI1LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDEgMSAxIDB6bTUuNDMzLTkuNzVhLjUgMS41IDMwIDEgMS0uODY2LS41LjUgMS41IDMwIDEgMSAuODY2LjV6IiBmaWxsPSIjMDAwIi8+PC9nPjwvc3ZnPg==";
const WHITE_BISHOP_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGZpbGw9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNOSAzNmMzLjM5LS45NyAxMC4xMS40MyAxMy41LTIgMy4zOSAyLjQzIDEwLjExIDEuMDMgMTMuNSAyIDAgMCAxLjY1LjU0IDMgMi0uNjguOTctMS42NS45OS0zIC41LTMuMzktLjk3LTEwLjExLjQ2LTEzLjUtMS0zLjM5IDEuNDYtMTAuMTEuMDMtMTMuNSAxLTEuMzU0LjQ5LTIuMzIzLjQ3LTMtLjUgMS4zNTQtMS45NCAzLTIgMy0yeiIvPjxwYXRoIGQ9Ik0xNSAzMmMyLjUgMi41IDEyLjUgMi41IDE1IDAgLjUtMS41IDAtMiAwLTIgMC0yLjUtMi41LTQtMi41LTQgNS41LTEuNSA2LTExLjUtNS0xNS41LTExIDQtMTAuNSAxNC01IDE1LjUgMCAwLTIuNSAxLjUtMi41IDQgMCAwLS41LjUgMCAyeiIvPjxwYXRoIGQ9Ik0yNSA4YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAxIDEgNSAweiIvPjwvZz48cGF0aCBkPSJNMTcuNSAyNmgxME0xNSAzMGgxNW0tNy41LTE0LjV2NU0yMCAxOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PC9nPjwvc3ZnPg==";
const WHITE_ROOK_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDM5aDI3di0zSDl2M3ptMy0zdi00aDIxdjRIMTJ6bS0xLTIyVjloNHYyaDVWOWg1djJoNVY5aDR2NSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMzQgMTRsLTMgM0gxNGwtMy0zIi8+PHBhdGggZD0iTTMxIDE3djEyLjVIMTRWMTciIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTMxIDI5LjVsMS41IDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGQ9Ik0xMSAxNGgyMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjwvZz48L3N2Zz4=";
const WHITE_QUEEN_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04IDEyYTIgMiAwIDEgMS00IDAgMiAyIDAgMSAxIDQgMHptMTYuNS00LjVhMiAyIDAgMSAxLTQgMCAyIDIgMCAxIDEgNCAwek00MSAxMmEyIDIgMCAxIDEtNCAwIDIgMiAwIDEgMSA0IDB6TTE2IDguNWEyIDIgMCAxIDEtNCAwIDIgMiAwIDEgMSA0IDB6TTMzIDlhMiAyIDAgMSAxLTQgMCAyIDIgMCAxIDEgNCAweiIvPjxwYXRoIGQ9Ik05IDI2YzguNS0xLjUgMjEtMS41IDI3IDBsMi0xMi03IDExVjExbC01LjUgMTMuNS0zLTE1LTMgMTUtNS41LTE0VjI1TDcgMTRsMiAxMnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTkgMjZjMCAyIDEuNSAyIDIuNSA0IDEgMS41IDEgMSAuNSAzLjUtMS41IDEtMS41IDIuNS0xLjUgMi41LTEuNSAxLjUuNSAyLjUuNSAyLjUgNi41IDEgMTYuNSAxIDIzIDAgMCAwIDEuNS0xIDAtMi41IDAgMCAuNS0xLjUtMS0yLjUtLjUtMi41LS41LTIgLjUtMy41IDEtMiAyLjUtMiAyLjUtNC04LjUtMS41LTE4LjUtMS41LTI3IDB6IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xMS41IDMwYzMuNS0xIDE4LjUtMSAyMiAwTTEyIDMzLjVjNi0xIDE1LTEgMjEgMCIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=";
const WHITE_KING_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMi41IDExLjYzVjZNMjAgOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIyLjUgMjVzNC41LTcuNSAzLTEwLjVjMCAwLTEtMi41LTMtMi41cy0zIDIuNS0zIDIuNWMtMS41IDMgMyAxMC41IDMgMTAuNSIgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMTEuNSAzN2M1LjUgMy41IDE1LjUgMy41IDIxIDB2LTdzOS00LjUgNi0xMC41Yy00LTYuNS0xMy41LTMuNS0xNiA0VjI3di0zLjVjLTMuNS03LjUtMTMtMTAuNS0xNi00LTMgNiA1IDEwIDUgMTBWMzd6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjUgMzBjNS41LTMgMTUuNS0zIDIxIDBtLTIxIDMuNWM1LjUtMyAxNS41LTMgMjEgMG0tMjEgMy41YzUuNS0zIDE1LjUtMyAyMSAwIi8+PC9nPjwvc3ZnPg==";

const BLACK_PAWN_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PHBhdGggZD0iTTIyLjUgOWMtMi4yMSAwLTQgMS43OS00IDQgMCAuODkuMjkgMS43MS43OCAyLjM4QzE3LjMzIDE2LjUgMTYgMTguNTkgMTYgMjFjMCAyLjAzLjk0IDMuODQgMi40MSA1LjAzLTMgMS4wNi03LjQxIDUuNTUtNy40MSAxMy40N2gyM2MwLTcuOTItNC40MS0xMi40MS03LjQxLTEzLjQ3IDEuNDctMS4xOSAyLjQxLTMgMi40MS01LjAzIDAtMi40MS0xLjMzLTQuNS0zLjI4LTUuNjIuNDktLjY3Ljc4LTEuNDkuNzgtMi4zOCAwLTIuMjEtMS43OS00LTQtNHoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";
const BLACK_KNIGHT_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMiAxMGMxMC41IDEgMTYuNSA4IDE2IDI5SDE1YzAtOSAxMC02LjUgOC0yMSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0yNCAxOGMuMzggMi45MS01LjU1IDcuMzctOCA5LTMgMi0yLjgyIDQuMzQtNSA0LTEuMDQyLS45NCAxLjQxLTMuMDQgMC0zLTEgMCAuMTkgMS4yMy0xIDItMSAwLTQuMDAzIDEtNC00IDAtMiA2LTEyIDYtMTJzMS44OS0xLjkgMi0zLjVjLS43My0uOTk0LS41LTItLjUtMyAxLTEgMyAyLjUgMyAyLjVoMnMuNzgtMS45OTIgMi41LTNjMSAwIDEgMyAxIDMiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNOS41IDI1LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDEgMSAxIDB6bTUuNDMzLTkuNzVhLjUgMS41IDMwIDEgMS0uODY2LS41LjUgMS41IDMwIDEgMSAuODY2LjV6IiBmaWxsPSIjZWNlY2VjIiBzdHJva2U9IiNlY2VjZWMiLz48cGF0aCBkPSJNMjQuNTUgMTAuNGwtLjQ1IDEuNDUuNS4xNWMzLjE1IDEgNS42NSAyLjQ5IDcuOSA2Ljc1UzM1Ljc1IDI5LjA2IDM1LjI1IDM5bC0uMDUuNWgyLjI1bC4wNS0uNWMuNS0xMC4wNi0uODgtMTYuODUtMy4yNS0yMS4zNC0yLjM3LTQuNDktNS43OS02LjY0LTkuMTktNy4xNmwtLjUxLS4xeiIgZmlsbD0iI2VjZWNlYyIgc3Ryb2tlPSJub25lIi8+PC9nPjwvc3ZnPg==";
const BLACK_BISHOP_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGZpbGw9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNOSAzNmMzLjM5LS45NyAxMC4xMS40MyAxMy41LTIgMy4zOSAyLjQzIDEwLjExIDEuMDMgMTMuNSAyIDAgMCAxLjY1LjU0IDMgMi0uNjguOTctMS42NS45OS0zIC41LTMuMzktLjk3LTEwLjExLjQ2LTEzLjUtMS0zLjM5IDEuNDYtMTAuMTEuMDMtMTMuNSAxLTEuMzU0LjQ5LTIuMzIzLjQ3LTMtLjUgMS4zNTQtMS45NCAzLTIgMy0yeiIvPjxwYXRoIGQ9Ik0xNSAzMmMyLjUgMi41IDEyLjUgMi41IDE1IDAgLjUtMS41IDAtMiAwLTIgMC0yLjUtMi41LTQtMi41LTQgNS41LTEuNSA2LTExLjUtNS0xNS41LTExIDQtMTAuNSAxNC01IDE1LjUgMCAwLTIuNSAxLjUtMi41IDQgMCAwLS41LjUgMCAyeiIvPjxwYXRoIGQ9Ik0yNSA4YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAxIDEgNSAweiIvPjwvZz48cGF0aCBkPSJNMTcuNSAyNmgxME0xNSAzMGgxNW0tNy41LTE0LjV2NU0yMCAxOGg1IiBzdHJva2U9IiNlY2VjZWMiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48L2c+PC9zdmc+";
const BLACK_ROOK_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik05IDM5aDI3di0zSDl2M3ptMy41LTdsMS41LTIuNWgxN2wxLjUgMi41aC0yMHptLS41IDR2LTRoMjF2NEgxMnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTE0IDI5LjV2LTEzaDE3djEzSDE0eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMTQgMTYuNUwxMSAxNGgyM2wtMyAyLjVIMTR6TTExIDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NUgxMXoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTEyIDM1LjVoMjFtLTIwLTRoMTltLTE4LTJoMTdtLTE3LTEzaDE3TTExIDE0aDIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNlY2VjZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjwvZz48L3N2Zz4=";
const BLACK_QUEEN_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIHN0cm9rZT0ibm9uZSI+PGNpcmNsZSBjeD0iNiIgY3k9IjEyIiByPSIyLjc1Ii8+PGNpcmNsZSBjeD0iMTQiIGN5PSI5IiByPSIyLjc1Ii8+PGNpcmNsZSBjeD0iMjIuNSIgY3k9IjgiIHI9IjIuNzUiLz48Y2lyY2xlIGN4PSIzMSIgY3k9IjkiIHI9IjIuNzUiLz48Y2lyY2xlIGN4PSIzOSIgY3k9IjEyIiByPSIyLjc1Ii8+PC9nPjxwYXRoIGQ9Ik05IDI2YzguNS0xLjUgMjEtMS41IDI3IDBsMi41LTEyLjVMMzEgMjVsLS4zLTE0LjEtNS4yIDEzLjYtMy0xNC41LTMgMTQuNS01LjItMTMuNkwxNCAyNSA2LjUgMTMuNSA5IDI2eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNOSAyNmMwIDIgMS41IDIgMi41IDQgMSAxLjUgMSAxIC41IDMuNS0xLjUgMS0xLjUgMi41LTEuNSAyLjUtMS41IDEuNS41IDIuNS41IDIuNSA2LjUgMSAxNi41IDEgMjMgMCAwIDAgMS41LTEgMC0yLjUgMCAwIC41LTEuNS0xLTIuNS0uNS0yLjUtLjUtMiAuNS0zLjUgMS0yIDIuNS0yIDIuNS00LTguNS0xLjUtMTguNS0xLjUtMjcgMHoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTExIDM4LjVhMzUgMzUgMSAwIDAgMjMgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTEgMjlhMzUgMzUgMSAwIDEgMjMgMG0tMjEuNSAyLjVoMjBtLTIxIDNhMzUgMzUgMSAwIDAgMjIgMG0tMjMgM2EzNSAzNSAxIDAgMCAyNCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlY2VjZWMiLz48L2c+PC9zdmc+";
const BLACK_KING_IMG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMi41IDExLjYzVjYiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjIuNSAyNXM0LjUtNy41IDMtMTAuNWMwIDAtMS0yLjUtMy0yLjVzLTMgMi41LTMgMi41Yy0xLjUgMyAzIDEwLjUgMyAxMC41IiBmaWxsPSIjMDAwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0xMS41IDM3YzUuNSAzLjUgMTUuNSAzLjUgMjEgMHYtN3M5LTQuNSA2LTEwLjVjLTQtNi41LTEzLjUtMy41LTE2IDRWMjd2LTMuNWMtMy41LTcuNS0xMy0xMC41LTE2LTQtMyA2IDUgMTAgNSAxMFYzN3oiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMjAgOGg1IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTMyIDI5LjVzOC41LTQgNi4wMy05LjY1QzM0LjE1IDE0IDI1IDE4IDIyLjUgMjQuNWwuMDEgMi4xLS4wMS0yLjFDMjAgMTggOS45MDYgMTQgNi45OTcgMTkuODVjLTIuNDk3IDUuNjUgNC44NTMgOSA0Ljg1MyA5IiBzdHJva2U9IiNlY2VjZWMiLz48cGF0aCBkPSJNMTEuNSAzMGM1LjUtMyAxNS41LTMgMjEgMG0tMjEgMy41YzUuNS0zIDE1LjUtMyAyMSAwbS0yMSAzLjVjNS41LTMgMTUuNS0zIDIxIDAiIHN0cm9rZT0iI2VjZWNlYyIvPjwvZz48L3N2Zz4=";

function setBoard() {

    BOARD.a8.innerHTML = "<img ondragstart='drag(event)' class='rook black' src='" + BLACK_ROOK_IMG + "'>";
    BOARD.b8.innerHTML = "<img ondragstart='drag(event)' class='knight black' src='" + BLACK_KNIGHT_IMG + "'>";
    BOARD.c8.innerHTML = "<img ondragstart='drag(event)' class='bishop black' src='" + BLACK_BISHOP_IMG + "'>";
    BOARD.d8.innerHTML = "<img ondragstart='drag(event)' class='queen black' src='" + BLACK_QUEEN_IMG + "'>";
    BOARD.e8.innerHTML = "<img ondragstart='drag(event)' class='king black' src='" + BLACK_KING_IMG + "'>";
    BOARD.f8.innerHTML = "<img ondragstart='drag(event)' class='bishop black' src='" + BLACK_BISHOP_IMG + "'>";
    BOARD.g8.innerHTML = "<img ondragstart='drag(event)' class='knight black' src='" + BLACK_KNIGHT_IMG + "'>";
    BOARD.h8.innerHTML = "<img ondragstart='drag(event)' class='rook black' src='" + BLACK_ROOK_IMG + "'>";

    for (let i = 0; i < 8; i++) {
        BOARD[ALPHABET.slice(i, i + 1) + '7'].innerHTML = "<img ondragstart='drag(event)' class='pawn black' src='" + BLACK_PAWN_IMG + "'>";
    }

    BOARD.a1.innerHTML = "<img ondragstart='drag(event)' class='rook white' src='" + WHITE_ROOK_IMG + "'>";
    BOARD.b1.innerHTML = "<img ondragstart='drag(event)' class='knight white' src='" + WHITE_KNIGHT_IMG + "'>";
    BOARD.c1.innerHTML = "<img ondragstart='drag(event)' class='bishop white' src='" + WHITE_BISHOP_IMG + "'>";
    BOARD.d1.innerHTML = "<img ondragstart='drag(event)' class='queen white' src='" + WHITE_QUEEN_IMG + "'>";
    BOARD.e1.innerHTML = "<img ondragstart='drag(event)' class='king white' src='" + WHITE_KING_IMG + "'>";
    BOARD.f1.innerHTML = "<img ondragstart='drag(event)' class='bishop white' src='" + WHITE_BISHOP_IMG + "'>";
    BOARD.g1.innerHTML = "<img ondragstart='drag(event)' class='knight white' src='" + WHITE_KNIGHT_IMG + "'>";
    BOARD.h1.innerHTML = "<img ondragstart='drag(event)' class='rook white' src='" + WHITE_ROOK_IMG + "'>";

    for (let i = 0; i < 8; i++) {
        BOARD[ALPHABET.slice(i, i + 1) + '2'].innerHTML = "<img ondragstart='drag(event)' class='pawn white' src='" + WHITE_PAWN_IMG + "'>";
    }

}

document.body.onload = function() {
    setBoard();
};

/* ////////////////////////////////////////////////// */
/*                   PIECE DRAGGING                   */
/* ////////////////////////////////////////////////// */

let MOVING_PIECE = null;

function drag(event) {
    MOVING_PIECE = event.target;
    MOVING_PIECE.style.opacity = 0;
}

function drop(event) {

    event.preventDefault();

    if (event.target != MOVING_PIECE) {
        if (event.target.tagName === "IMG") {
            event.target.parentElement.replaceChild(MOVING_PIECE, event.target);
        }
        if (event.target.tagName === "TD") {
            event.target.appendChild(MOVING_PIECE);
        }

        getCurrentPosition();
        //find black move
        setTimeout(()=>{findBestBlackMove(CURRENT_POSITION)},10);

    }

    MOVING_PIECE.style.opacity = 1;

  
}

function allowDrop(event) {
    event.preventDefault();
}

/* ////////////////////////////////////////////////// */
/*                   BOARD ENCODING                   */
/* ////////////////////////////////////////////////// */

let CURRENT_POSITION = {
    WHITE: [],
    BLACK: [],
    MIXED: [],
};

const PAWN_CODE = 1;
const KNIGHT_CODE = 2;
const BISHOP_CODE = 3;
const ROOK_CODE = 4;
const QUEEN_CODE = 5;
const KING_CODE = 6;

function getCurrentPosition() {

    CURRENT_POSITION.WHITE.length = 0;
    CURRENT_POSITION.BLACK.length = 0;
    CURRENT_POSITION.MIXED.length = 0;

    Object.values(BOARD).forEach((tile)=>{

        let code = 0;

        if (tile.firstChild != null) {
            switch (tile.firstChild.classList[0]) {
            case 'pawn':
                code = PAWN_CODE;
                break;
            case 'knight':
                code = KNIGHT_CODE;
                break;
            case 'bishop':
                code = BISHOP_CODE;
                break;
            case 'rook':
                code = ROOK_CODE;
                break;
            case 'queen':
                code = QUEEN_CODE;
                break;
            case 'king':
                code = KING_CODE;
                break;
            }
            switch (tile.firstChild.classList[1]) {
            case 'white':
                CURRENT_POSITION.WHITE.push(code);
                CURRENT_POSITION.BLACK.push(0);
                CURRENT_POSITION.MIXED.push(code);
                break;
            case 'black':
                CURRENT_POSITION.BLACK.push(code);
                CURRENT_POSITION.WHITE.push(0);
                CURRENT_POSITION.MIXED.push(code);
                break;
            }
        } else {
            CURRENT_POSITION.WHITE.push(code);
            CURRENT_POSITION.BLACK.push(code);
            CURRENT_POSITION.MIXED.push(code);
        }

    }
    );

    //console.log(CURRENT_POSITION);

}

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
