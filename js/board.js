/*
 *
 * board.js
 *
 * 盤に関する処理
 *
 */

// 駒を動かす
function moveBoard(number) {
    var from = kif.kif[number]["from"];
    var to = kif.kif[number]["to"];
    
    var fromIndex = (HEIGHT - from[1]) * WIDTH + (from[0] - 1);
    var toIndex = (HEIGHT - to[1]) * WIDTH + (to[0] - 1);

    board[toIndex] = board[fromIndex];
    board[fromIndex] = BLANK;
}

// 盤の初期配置状態に戻す
function setStartBoard() {
    for (var i = 0; i < 2; i++) {
        for(var j = 0; j < 8; j++) {
            if(i === 0) {
                board[(j % 4) + Math.floor(j / 4) * WIDTH + 1] = kif.position[i][j];
            } else {
                board[(j % 4) + WIDTH * Math.floor(j / 4) + WIDTH * 4 + 1] = kif.position[i][j];
            }
        }
    }
}

// selectでどれかの指し手が選択された
function boardChange() {
    currentNumber= document.getElementById("boardSelect").value;
    redraw();
}

// テキスト(json)から棋譜を読み込む
function loadKif() {
    var _kif = document.getElementById("kifText").value;
    _kif = deleteParagraph(_kif); //改行を削除

    kif = JSON.parse(_kif);

    setStartBoard(kif);

    for (var i = 0; i < kif.kif.length; i++) {
        if(i === 0) {
            document.getElementById("boardSelect").options[i] = new Option("開始局面",i);
        } else if(i !== kif.kif.length - 1) {
            document.getElementById("boardSelect").options[i] = new Option(i +  ". " + kif.kif[i]["from"] + " " + kif.kif[i]["to"],i);
        } 
    }

    console.log(board);

    draw();
}

// 盤の初期化
function initBoard() {
    for (var i = 0; i < HEIGHT; i++) { 
        for (var j = 0; j < WIDTH; j++)
            board[i * WIDTH + j] = BLANK;
    }
}
