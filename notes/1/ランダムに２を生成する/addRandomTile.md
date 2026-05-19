addRandomTile(board)
boardの情報をもった関数宣言

const emptyCells = [];
空いているマスの一覧をいれるための箱

board.forEach((row, rowIndex))
boardの中身を出す
row = [null,null,null,null]
rowIndex = 0
⇧これあるだけ繰り返す
rowが横の行なので

row.forEach((cell, colIndex))
その行からさらに１マスずつ取る
cellがいわゆるマス
2重ループであるだけ繰り返して順番にマスを取り出してる

if(cell === null)であったら
emptyCells.push({rowIndex, colIndex})
emptyCellsに追加　予約語じゃないよ
rowIndexが行番号
colIndexが列番号
            colIndex
   rowIndex [null, null, null, null],
            [null, null, null, null],
            [null, ここだよ, null, null],
            [null, null, null, null],

rowで場所決めてから何個のところって見方でみている
不思議だね
const emptyCellsに空の配列作ってるからそこに登録している
実際は番号で入っている

{rowIndex:1, colIndex:3}みたいな場所で

if(emptyCells.length === 0){
  return board;
}
lengthは要素の数を数値にしてくれるので
lengthが0、つまり何もないときはそのまま返す
gameoverだったり何も置けない状態
nullがcellであれば返す。ないのは置けるところないからその盤面のまま返す
要はこれ以上増やさない処理

emptyCells[Math.floor(Math.random() * emptyCells.length)]
Math.random()が0~1未満の数字
emptyCells.lengthがいわゆる空いているマスの数[0.0, 1.3, 2.3, 3.1]
この位置が開いているなら4になる

randomに生成された0~1の数　×　空いているマスの数
ここだけだと0 ~ 3.9999999....になる
Math.floorでその小数点を切り捨てると
0~3になる
要はランダムに決めているだけではある

emptyCellsの中身の配列
例えば[0.0, 1.3, 2.3, 3.1]　作られた数が2なら2.3の場所になる
から選ばれる
この中から何番目かのやつが選ばれる

const newBoard = board.map((row) => [...row]);

...rowが配列のコピー
boardをコピーしている

board.map
map(row)でrowっていう新しい配列を作る？
その名前の新しい配列を使えるように定義している？

newBoard[randomCell.rowIndex][randomCell.colIndex] = 2;
さっきのnewBoardの...rowの処理で配列をコピーしてきた⇒そのコピーしてきた配列にそれぞれ2を代入している
代入している部分はrandomCellで作ったランダムな配置に

randomCell = [1.3]とかの位置だったら
randomCell.rowIndex ⇨　1
randomCell.colIndex ⇨　3
みたいな
newBoard = [1][3] = 2
みたいな処理になっている

んでこれをnewBoardに返している

return newBoard;


 const [board, setBoard] = useState(() =>
        addRandomTile([
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ])
    );
    ()とaddRandomTileが追加された

    なんか初回だけやりたいときに
    useState(() => {})みたいな書きかたになるらしい

    いわゆる一番最初の盤面を作りたい処理っぽい今回のは