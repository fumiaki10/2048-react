左にキー入力して実際に移動させる


function moveLeft(board){}
addRandomTileが入ったボード情報
 addRandomTile([
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ])
        を引数としている
ランダムに2が入ってる状態のボードのこと

board.map ボードを一列ずつ取り出して新しい配列を作る
board.map(row)1～4行目を順番に取り出す
board.map(row)　rowという名前で一列ずつ配列を作りますよという宣言
moveRowLeft(row) moveRowLeftを取り出した配列に適用するということ
board.map(row) で取り出した　⇨　[2,2,null,null]
moveRowLeft(row)で取り出したrowにmoveRowLeftを適用するという宣言⇒[4,null,null,null]
という形になる

return newBoard
newBoardを外でも使えるようにする

function moveLeft(board) {
    const newBoard = board.map((row) => moveRowLeft(row));
    return newBoard;
}
このへんよくわからん
rowってどこから引数になっているんや
(row)なら外側に呼び出す宣言があってもいいと思うがどこにも見当たらない


function handleKeyDown(event){}
イベントが押された
⇓
if(event.key === "ArrowLeft")
それは左矢印？
⇓
もしそうなら左に移動した結果を入れる
moveLeft(board) 今のボードを左移動した結果

reactは元のデータを変えずに新しい結果を返した内容を表示したりするので
moveBoardなんかで新しく定義している

<div className="game" tabIndex="0" onKeyDown={handleKeyDown}>
tabIndex="0" このdivを選択できるようにする
・tabキーで選択できるようになる
・フォーカスを当てられるようになる
・キーボード入力を受け取れるようになる
なんか入力があっても反応しないときがあるけどtabIndex="0"があると上記のことが受け入れられるので反応があるようになるらしい

onKeyDown
ユーザーが←を押したとする
⇓
handleKeyDownが反応
⇓
Reactがイベント情報を作る　handleKeyDown(event)
⇓
if(event.key === "ArrowLeft")
がtrueであれば
⇓
左移動処理開始

キーボードに反応するようにして、かつ左入力だったらhandleKeyDownに教えて

このeventを受け取ったのが
function handleKeyDown(event)
そっからmoveLeft(board)をmoveBoardに入れる処理が行われる

moveLeftは
newBoardを設定⇒board情報をrowとして扱い、moveRowLeftで処理する
⇓その内容を実行、反映
return newBoardを書くことで実行

addRandomTileとmoveBoard情報が混ざったやつがsetBoardにはいった

chatGPTでコードを写したり学んでいたりする時に思うのは書く順番が多分本番と逆
これはtabIndexで入力を受け取れるようにして、onKeyDownで押し込んだ時の処理書くかぁみたいなほうが、考え方としては自然にとれる
先に内部処理だとこれ結局何のためにしているんだろうになったり、書けなくなることが多い

tabIndex="0" onKeyDownでとりあえず押し込むかと目的を持つ
⇓
押したときどうしてほしいのか書いていく

board情報を更新して継承し続けている感じ