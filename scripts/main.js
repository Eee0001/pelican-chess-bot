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