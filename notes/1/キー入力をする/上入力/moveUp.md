行を取り出して、横一列としてmoveRowLeftに渡して、戻ってきた結果を縦に戻す
何を言っているのかよくわからないぜ

const newBoard = board.map(row)
1行ずつ入れる処理
[...row] コピーを作っている
一行ずつとってそれのコピーを作る

いきなりforからcolIndex = 0
で始まるから迷ったけど
そのあとの
board[0][colIndex]で使うやつだった
やっぱり上から解いてくとだめだよ
数字作ったり形作ってforとかで効率化しないと順番わからんよ

const column = [
  board[0][colIndex],
  board[1][colIndex],
  board[2][colIndex],
  board[3][colIndex],
]
colIndexを0~3でforで生成しているので順番に入るようになる
⇓
0        1     2     3
[column, null, null, null],
[column, null, null, null],
[column, null, null, null],
[column, null, null, null]
こんな感じで縦の処理をしてくれる


[
 [2, 4, null, 2],
 [2, null, 4, 2],
 [null, 4, 4, null],
 [2, null, null, 2]
]

みたいになっていたら

const columnで一番左の行を拾ってくる
[2,2,null,2]

const movedColumn = moveRowLeft(column)
さっき拾ってきたcolumnにmoveRowLeftで左に寄せる処理をかけている

[4,2,null,null]になっている

moveColumnに適用された奴が入ってて
それを縦にし直す

さっきのcolIndexをboardに入れてcolumnを作った後
再度forを中で回して二重ループ
colIndexが<4で満たされるまで行われる
結果colIndexが0~3の時　rowIndexにさっき横並べにしたやつが順番に入る

イメージし辛いな

newBoard[rowIndex][colIndex] = movedColumn[rowIndex];
newBoardで何を更新する
for~
newBoard[0][0]のとき = movedColumn[0]として更新する;
newBoardの0，0をmoveColumnにしている

moveColumnの0番目である4をnewBoardの[0][0]に入れるって書きかたか

const newBoard内で行われた処理