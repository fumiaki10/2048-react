board.flat()
配列を1次元にして
includes(null)nullが含まれているかみて

return falseなのは
含まれていたらこのgameOver関数を進めていくから
trueならgameOverにするよという処理にする

for(rowIndex)~
横一列を見ていくような感じ
colIndexは縦
なぜ3なのか
⇓
隣に数字があるかこの後判定するため

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 4; colIndex++) {
            if (board[rowIndex][colIndex] === board[rowIndex + 1][colIndex]) {
                return false;
            }
        }
    }

    縦方向で見る場合と微妙に違う
    rowが0colが0 次の数はrowが1colが0

    上と下と見ている

    const[gameOver,setGameOver] = useState(false)
    　　　状態　　　　状態を変更する　　　　　　初期値
gameOver いまゲームオーバーかどうかを保持する箱

setGameOver gameOverの状態を変更する関数
gameOver=false 初期値はfalseから始める
要はまだgameOverではないみたいない状態を作っている

負けた瞬間setGameOver(true)
gameOver = true

if isGameOver もしゲームオーバーなら
setGameOver(true) 更新されるよ
setGameOverは更新先　gameOverは更新前
gameOverを更新したいときはsetGameOverに変更内容を書く的な
今回はsetGameOver(true)という形で更新してね

{gameOver && <h2>ゲームオーバー！</h2>}
true     で　　　　表示

reactはfalseだったりnull、undefinedは表示しない
要はgameOverがtrueの時に表示してという書きかた

負けた時
setGameOver(true)によってgameOverが(true)に
再描画される

そっからtrue && <h2>が動く