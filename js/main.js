/*
 *
 * main.js
 *
 * メイン処理
 *
 */

const HEIGHT = 6;
const WIDTH = 6;
const BOARD_SIZE = 48;
const OFFSET = BOARD_SIZE;
const BLANK = 0;
const BLANK_JUSTICE = 1; // 後手の良いオバケ
const BLACK_EVIL = 2;    // 後手の悪いオバケ
const WHITE_JUSTICE = 3; // 先手の良いオバケ
const WHITE_EVIL = 4;    // 先手の悪いオバケ

var imgPiece;
var board = new Array();

// 初期化
window.onload = function() {
    imgPiece = new Image(BOARD_SIZE*3,BOARD_SIZE*3);
    imgPiece.src = "img/piece.png"; 
 
    initBoard(); // 盤の初期化

    imgPiece.onload = function() {
        draw();
    }
}

function initBoard() {
    for (var i = 0; i < HEIGHT; i++) { 
        for (var j = 0; j < WIDTH; j++)
            board[i * WIDTH + j] = BLANK;
    }
}

function loadKif() {
    var _kif = document.getElementById("kifText").value;

    for (var i = 0; i < _kif.length; i++) {
        var kif = _kif[i];
        var kifdata = new Array();
        //初期配置の代入
        if(i >= 0 && i <= 3) {
            board[(i+1)] = parseInt(kif);
        } else if(i >= 4 && i <= 7) {
            board[(i+3)] = parseInt(kif);
        }else if(i >= 9 && i <= 12)  {
            board[WIDTH*4 + (i-9) + 1] = parseInt(kif);
        } else if(i >= 13 && i <= 16){
            board[WIDTH*5 + (i-13) + 1] = parseInt(kif);
        } else {
                        console.log(kif);
            kifdata[(i - 18) % 5] += kif; 
        }
    }
    for(var i = 0; i < kifdata.length;i++)
    document.getElementById("kif").options[i] = new Option(kifdata, i);
    console.log(kifdata);
    draw();
}

function kifChange() {

}

function buttonClick(id) {
    
    switch (id) {
        case -2:
        console.log("<<")
        break;
        case -1:
        console.log("<")
        break;
        case 1:
        console.log(">")
        break;
        case 2:
        console.log(">>")
        break;
    }
}
