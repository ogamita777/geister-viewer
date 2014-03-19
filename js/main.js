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
var currentNumber = 0; // 現在の手数
var kif; // 棋譜情報

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

// 改行を削除する
function deleteParagraph(data) {
    data = data.replace(/\r\n/g, ""); // IE
    data = data.replace(/\n/g, "");   // Firefox
   
    return data;
}

// ボタンがクリックされた時に呼ばれる
function buttonClick(id) {
    switch (id) {
        case -2: // 開始局面に戻る
        currentNumber = 0; 
        break;
        case -1: // 1手戻す
        currentNumber--; 
        if(currentNumber < 0) {
            currentNumber = 0;
        }
        break;
        case 1: // 1手進める
        currentNumber++;
        if(currentNumber > kif.max) {
            currentNumber = kif.max;
        }
        break;
        case 2: // 最終局面に移動
        currentNumber = kif.max;
        break;
    }

    redraw();
}
