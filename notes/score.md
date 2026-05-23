moveRowLeftは今rowを返しているけどスコアも返すように追記する

let gainedScore = 0
足していく箱を作る

numbersと隣のnumbersが一致している
つまり合体処理が起きる場合は
そこの合体されるやつのnumbersを＊2することで次の数字になり、それをそのままポイントにする
const mergedNumber = numbers[i] * 2
まあ加えるポイントどうしようかと思ったら、numbersが作られた時にその数字入れればいいよねという考え

result.pushにも使えるからそのまま入れるし
gainedScoreにもその数字そのままポイントに使用というので
gainedScore += mergedNumber;

あとのwhileはそのまま
nullをいれるやつ

return
return resultだけにしていたら帰ってきていたのは
[4,2,null,null] みたいな配列だけ
ただスコアも返してほしいので
row: result,
score: gainedScore,

rowには配列　const result = []に格納されているやつ
scoreにはそのままscoreがはいる
ポイントをgainedScore += mergedNumberで入れてた

ここまででスコアが返ってくる処理

moveLeftに追記して盤面全体の処理を加える
今までは1列のみで処理していたのを全部でやる

let totalGainedScoreで今回の移動で増えたスコアの保存先を作る
全体でどのくらい増えたか1行目＋４　2行目＋8みたいな

const result = moveRowLeft(row)
まず1行処理する

さっきmoveRowLeftで取れる値にscoreを増やしたので
rowとscoreどっちも取れている形になる
resultには合体後の行と増えたscoreが入っている

それがtotalGainedScoreに入るが、result.scoreなのでscoreだけ足されている
っていうのがconst newBoardで.mapしているので1行ずつ順番にされていく
結果全行分の処理を行う

[
  {
    row: [4, 4, null, null],
    score: 4
  },
  {
    row: [8, null, null, null],
    score: 8
  }
]
return resultだけだとこうやって返しちゃうから
return result.rowで配列だけ返してboardを作っている
別枠にしないと元の形超崩れるよねっていう話だと思う


return {
  board: newBoard,
  score: totalGainedScore,
}
ここはまあ実体化的な奴。外の関数に関与するためにreturnしている


ここから実際に増やしたときの処理？
if(gameOver) return;
これは安全装置的な
gameOver がtrueならその下の処理を全部止める


moveBoard = moveLeft(board);
をmoveResultにしてる

moveResult = moveLeft(board)
ボードの内容をいれる
必要に応じて入れられるようにする

  setScore((prevScore) => prevScore + moveResult.score);
  こうやって書くとx += yみたいな感じでmoveResultの結果を入れられる箱みたいになっている
  一時的みたいな
  最新の箱を入れ続けられる箱
  しかもすぐ更新される揮発性てきな
  setScore((prevScore) => {
  // Reactが最新scoreを入れてくれる箱
  return prevScore + moveResult.score;
});

setScore(0)
ゲームオーバーのあとリセットするやつ