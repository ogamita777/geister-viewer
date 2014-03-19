/*
 *
 * draw.js
 *
 * 描画処理
 *
 */

function draw() {
    
    var canvas = document.getElementById('board');
    if(!canvas || !canvas.getContext) {
        return false;
    }
    var ctx = canvas.getContext('2d');
    
    ctx.clearRect(0,0,384,384);

    // 盤の描画
    ctx.strokeStyle = "black"; // 線の色は黒に
    for (var i = 0; i <= WIDTH; i++) { // 縦線 
        ctx.moveTo(i * BOARD_SIZE + OFFSET, OFFSET);
        ctx.lineTo(i * BOARD_SIZE + OFFSET, BOARD_SIZE * HEIGHT + OFFSET);
        ctx.stroke();
    }
    for (var i = 0; i <= HEIGHT; i++) { // 横線
        ctx.moveTo(OFFSET, i * BOARD_SIZE + OFFSET);
        ctx.lineTo(WIDTH * BOARD_SIZE + OFFSET, i * BOARD_SIZE + OFFSET);
        ctx.stroke();
    }
    
    // 駒の描画
    for (var i = 0; i < HEIGHT; i++) {
        for (var j = 0;j < WIDTH; j++) {
            switch (board[i * WIDTH + j]) {
                case 1:
                ctx.drawImage(imgPiece,BOARD_SIZE,BOARD_SIZE,BOARD_SIZE,BOARD_SIZE,j * BOARD_SIZE + OFFSET,i * BOARD_SIZE + OFFSET,BOARD_SIZE,BOARD_SIZE);
                break;
                case 2:
                ctx.drawImage(imgPiece,BOARD_SIZE * 2,BOARD_SIZE,BOARD_SIZE,BOARD_SIZE,j * BOARD_SIZE + OFFSET,i * BOARD_SIZE + OFFSET, BOARD_SIZE,BOARD_SIZE);
                break;
                case 3:
                ctx.drawImage(imgPiece,BOARD_SIZE,0,BOARD_SIZE,BOARD_SIZE,j * BOARD_SIZE + OFFSET,i * BOARD_SIZE + OFFSET, BOARD_SIZE,BOARD_SIZE);
                break;
                case 4:
                ctx.drawImage(imgPiece,BOARD_SIZE * 2,0,BOARD_SIZE,BOARD_SIZE,j * BOARD_SIZE + OFFSET,i * BOARD_SIZE + OFFSET, BOARD_SIZE,BOARD_SIZE);
                break;
                default:
                
                break;
            }
        }
   }
}


function redraw() {
    initBoard();
    setStartBoard();

    for (var i = 1; i <= currentNumber; i++) {
        moveBoard(i);
    }

    draw();
}
