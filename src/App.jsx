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

// 左入力3-0
function moveRowLeft(row) {
    // row⇒配列の1列分　nullじゃないものを残す処理(3-1)
    const numbers = row.filter((cell) => cell !== null);
    // 合体後の配列を用意(3-2)
    const result = [];
    // 1つずつ確認する(3-3)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + 1]) {
            result.push(numbers[i] * 2);
            i++;
        } else {
            result.push(numbers[i])
        }
    }
    // 空いた部分にnullを差し込む3-4
    while (result.length < 4) {
        result.push(null)
    }
    // resultに結果を外に渡す3-5
    return result;
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