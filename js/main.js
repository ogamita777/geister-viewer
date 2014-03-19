/*
 *
 * main.js
 *
 * メイン処理
 *
 */

// 定数(という名の変数)
var HEIGHT = 6;          // 盤の縦のマスの数
var WIDTH = 6;           // 盤の横のマスの数
var BOARD_SIZE = 48;     // 盤の1マスのサイズ 
var OFFSET = BOARD_SIZE; // オフセット
var BLANK = 0;           // 何もない
var BLANK_JUSTICE = 1;   // 後手の良いオバケ
var BLACK_EVIL = 2;      // 後手の悪いオバケ
var WHITE_JUSTICE = 3;   // 先手の良いオバケ
var WHITE_EVIL = 4;      // 先手の悪いオバケ

// グローバル変数
var imgPiece; // 駒の画像
var board = new Array(); // 盤面情報

// 初期化
window.onload = function() {

    imgPiece = new Image(BOARD_SIZE*3,BOARD_SIZE*3);
    imgPiece.src = "img/piece.png"; 
 
    initBoard(); // 盤の初期化

    // 画像が読み込めたら描画処理へ
    imgPiece.onload = function() {
        draw();
    }
}

// 盤の初期化
function initBoard() {
    for (var i = 0; i < HEIGHT; i++) { 
        for (var j = 0; j < WIDTH; j++)
            board[i * WIDTH + j] = BLANK;
    }
}

// テキスト(json)から棋譜を読み込む
function loadKif() {
    var _kif = document.getElementById("kifText").value;
    _kif = deleteParagraph(_kif); //改行を削除

    var kif = JSON.parse(_kif);

    for (var i = 0; i < 2; i++) {
        for(var j = 0; j < 8; j++) {
            if(i === 0) {
                board[(j % 4) + Math.floor(j / 4) * WIDTH + 1] = kif.position[i][j];
            } else {
                board[(j % 4) + WIDTH * Math.floor(j / 4) + WIDTH * 4 + 1] = kif.position[i][j];
            }
        }
    }

    for (var i = 0; i < kif.kif.length; i++) {
        if(i === 0) {
            document.getElementById("kif").options[i] = new Option("開始局面",i);
        } else if(i !== kif.kif.length - 1) {
            document.getElementById("kif").options[i] = new Option(i +  ". " + kif.kif[i]["from"] + " " + kif.kif[i]["to"],i);
        } else {
            document.getElementById("kif").options[i] = new Option(i + ". "  + "投了",i);
        }
    }

    console.log(board);

    draw();
}

// 改行を削除する
function deleteParagraph(data) {
    data = data.replace(/\r\n/g, ""); // IE
    data = data.replace(/\n/g, "");   // Firefox
   
    return data;
}

// selectでどれかの指し手が選択された
function kifChange() {

}

// ボタンがクリックされた時に呼ばれる
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
