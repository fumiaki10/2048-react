import { useState } from "react";
import "./App.css";

function addRandomTile(board) {
    // nullを入れるための箱
    const emptyCells = [];

    // 列⇒行の順番でcellの中でnullの場所を探している(1-1)
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === null) {
                // 仮にcellがnullだったところがあればその場所をさっきの箱に記録（1－2）
                emptyCells.push({ rowIndex, colIndex });
            }
        });
    });
    // (1-2の処理で箱の中身がなければ（nullがなかったら）そのままのボードを返す)
    if (emptyCells.length === 0) {
        return board;
    }
    // ランダムなマスを選ぶ（2－0）
    const randomCell =
        // emptyCellsの中の配列からランダムに選ぶ(2-1)
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
    // 配列のコピーを生成(2-2)
    const newBoard = board.map((row) => [...row]);

    newBoard[randomCell.rowIndex][randomCell.colIndex] = 2;

    return newBoard;
}


function App() {
    const [board, setBoard] = useState(() =>
        addRandomTile([
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ])
    );

    return (
        <div className="game">
            <h1>2048</h1>

            <div className="board">
                {/* あとで16マスそのものに変更を加えるならkey=indexは非推奨 */}
                {board.flat().map((cell, index) => (
                    <div className="cell" key={index}>
                        {cell}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;