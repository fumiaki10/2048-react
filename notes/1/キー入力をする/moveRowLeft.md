左入力をできるようにするところから始まる
null, 2, null, 2みたいにあったとき
4, null, null, null になるのを期待

const numbers = row.filter((cell) => cell !== null)
filter 条件に合うものだけ残す
(cell) => cell !== null
nullじゃないものだけを残す
!== はそうじゃないもの
cellの中身がnullじゃないものだけ残す

2,null,2,4だったら
2,2,4になる

const result = [];
には最終的に合体した後のやつらが入る
2,2,2,2 ⇨　4,4,null,nullみたいになる

for(let i = 0; i < numbers.length; i++>)
iがnumbers.lengthナンバーズの要素の数より少なければiに1つずつ足していく
numbersがさっきrow.filterかけたやつ
row[2,2,null,4]だったら　⇒　row.filterによってnumbers[2,2,4]になっている
んでnumbers.lengthなので3
numbers[2,2,4]　i=0のとき

result.pushリザルトに入れる
numbers[i] * 2の内容がはいる
numbers[0],numbers[1],numbers[2]にそれぞれ*2した内容
今なんか知らんけどnumbersとfor文の番号振りが重なった感覚があった
言語化できない

まあなんかiがようは1つずつ振られてる？いや多分違うな
これはあれか、numbers.lengthの数だけiを順番に作っている書きかた
まず最初にnumbers[i]だからnumbers[0]の処理から
numbers[0] === numbers[0 + 1]なら
result.push
numbers[i] * 2
やっぱりあれだなnumbers[2,2,4]だったとしたら
numbers[0]ならnumbers[2](最初の２)のことを指しているな
2 === 1
⇓
numbers[i]はi番目の値
numbers[i + 1]i番目の値に+1している
numbers[0 + 1]みたいな書きかた　つまりnumbers[1]になっている

numbers[2,2,4]
numbers[i]これはいったん最初はnumbers[0]で2
numbers[i + 1]はnumbers[1]なので2
つまり一致しているので次の処理が走る
result.push(numbers[i] * 2)ということで　
resultにnumbers[0] * 2 が入っている　結果は４
ここでi++ もしているので　i = 1

次の処理 numbers[1] === numbers[1 + 1]

numbers[i]は今見ている数字から　numbers[i + 1]隣の次の数字を見ている

numbers[i] === numbers[i + 1]今見ている数字と次の数字は同じか？という処理

numbers[0] から始まっている
i++することで次の数を飛ばしている

for文でi++しているので+1
中の処理のi++でさらに+1
なのでnumbers[0]の処理で内側のi++も走った場合
numbers[2]からスタートになる

while(result.length < 4>){
  result.push(null)
}
result.lengthが足した分なくなっているから
3以下になるようにnullを足していくことで
4,4,null,null みたいにあとから足されて満たされる

for trueでnumbersの処理結果がresultに入った場合
result[4]にまずなるじゃん
そっから次の1の処理スキップするじゃん
[2]からスタートする　4の処理になる
numbers[2] === numbers[2 + 1]
numbersの2の位置、つまり4が　numbers[3]の位置　隣の位置の数字が一致しているか
今回はnullなので一致していない
最終的にresult.pushだけ走っているので4がresultにそのまま追加される

forを抜けた後でwhileで< 4のとき、なくなった分だけnullを後ろに足している


return resultはこの関数の答えとして,resultを外に返す処理らしい
要は元の形はこんな形だった　const ~~ = ~[2,2,4,4]
returnしたあとデータ上は [4,8,null,null]になっている
元の形は見えていて完成品はデータ上存在している感じ
