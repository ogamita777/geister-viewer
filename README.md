geister-viewer
===
ガイスターの棋譜を再生するWebアプリです。  
HTML5 Canvasで作られています。   
また、MITライセンスで公開されています。

実装されたこと
---
- json形式の棋譜をテキストエリアに入れて棋譜送信ボタンを押すと、初期配置が盤面に反映される。  
- 棋譜を再生する


ガイスターの棋譜ファイルについて
---  
拡張子はjsonです。  

### 形式
date：対局日  
white：先手    
black：後手    
result：結果  
max：手数  
position：駒の初期配置  
kif：棋譜情報     

### サンプル(kif.json)
```
{
    "date": "2014-03-14",
    "white": "human",
    "black": "human2",
    "result": "1-0",
    "max": 3,
    "position": [
        [1,1,1,1,2,2,2,2],
        [3,4,3,4,4,3,4,3]
    ],
    "kif": [
        {
            "type": "start"
        },
        {
            "from": [2, 2],
            "to": [2, 3]
        },
        {
            "from": [5, 5],
            "to": [5, 4]
        },
        {
            "from": [2, 3],
            "to": [2, 4]
        },
        {
            "type": "resign"
        }
    ]
}
```

  
