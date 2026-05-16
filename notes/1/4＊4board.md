[
    [null, null, null, null]
    [null, null, null, null]
    [null, null, null, null]
    [null, null, null, null]
]

いわゆる2次元配列
配列の中に配列が入っている構造

[row]は行で横並び
[column]は列で縦並び
で管理する
nullは数字が振られていないのでなにもないということでnull


return()
画面に何を表示するかを書いてあるらしい？
reactだとhtmlっぽいのが書ける⇒jsxという

あとreactだとclassは予約語なのでclassNameを代わりに使っている
classの使い方は知らん

flat()
縦に並んだ配列を1次元にする
[null, null, null, null, null, null, ...]

.mapが一列のほうが扱いやすいのでそうしている

記述も増えるしflatだと
board.flat().map()
だけでいいらしい


.map((cell, index))
配列を一個ずつ取り出してHTMLを作っているイメージ
[2,4,null,8]

↓

<div>2</div>
<div>4</div>
<div></div>
<div>8</div>

そもそもmapはコールバック関数
返り値がある
forEachだと配列とかで処理しようとしても、errorになるが
mapは処理できる
forEach⇒処理するだけ
var result = [1,2,3].forEach(function( value ) {

    return value * 2;

});

console.log( result );
みたいなとき計算はする。ただするだけみたいな
map⇒値を返す
計算後その値が返ってくるところまでさぎょうしてくれる
処理するだけだと値を返さないっぽい

配列データ.map( function( value, index, array ) {

});
みたいな処理ができるっぽい
配列の値、配列のインデックス番号、現在処理している配列
の順番
mapは元の配列に一切手を加えないらしいが
arrayを利用すると変更できる
ようわからんが
map理解のためのサイト
https://www.sejuku.net/blog/21812

key={index}
わからん
識別番号的なものらしい
どれが変更されたか識別子として使ってるけど推奨されてない
indexは非推奨なのでどっかで変更とは書いてあったけど16マスに変更がないなら別にいいらしい。固有につける

{cell}
いわゆる要素。divで作っているマスに相当する今回は
cssで形を整えている
boardの状態が2次元配列のやつ
 [2, null, null, null],
[null, 4, null, null],
[null, null, null, null],
[null, null, null, null],
このboardをflatにして1次元に
そこからcellって名前でmapが引っ張り出して、そのまま{cell}として返してる
要は配列出して返しただけ
ただ今回はcssで加工されたやつを返してる
↓
ちょっとずれてた
reactが作ったhtmlに対して適用されるcssという流れなので、
reactが
<div class="cell">2</div>
とか作った後に
cssの
background-colorとかが適用される

あと{cell}は
javascriptの値はjsxに埋め込むという意味らしいよくわからんけど

export default App;
ほかのファイルでもこのファイルが使えるようにする



<div className="board">
                {/* あとで16マスそのものに変更を加えるならkey=indexは非推奨 */}
                {board.flat().map((cell, index) =>(
                <div className="cell" key={index}>
                    {cell}
                </div>
                ))}
            </div>
この辺の理解

const boardのいわゆる原型の配列を拾って、それを1次元にして、mapがcellっていう返す形を決めておく
cellが中身にあるから、{cell}を受け取ってcellに入れてconst boardに返してる？
あ、cell＝{配列が順番に入る}ってことか
map(cell)このcellにboardの配列が順番に入る⇒んでdivの中身のcellが引数として受け取って2とかnullとか入る
そのdivタグの結果をboardに返してるのか
↓ちょい違った
boardには返しておらずmapが新たに配列を用意しそこに入れてる