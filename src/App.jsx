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

// 盤面全体を左に動かす関数(4-1)
function moveLeft(board) {
    // boardを引数としてmoveRowLeftを適用したrowを作る(4-2)
    const newBoard = board.map((row) => moveRowLeft(row));
    return newBoard;
}

// 右移動の内部処(6-0)
function moveRowRight(row) {
    // row情報をコピーして反転させる(6-1)
    const reversedRow = [...row].reverse();
    // 反転コピーされたやつに左入力の時と同じ処理で左寄せに(6-2)
    const movedRow = moveRowLeft(reversedRow);
    // 左寄せになった後で反転することで右寄せた状態になる
    return movedRow.reverse();
}
// 右移動の入力処理(6-0-1)
function moveRight(board) {
    // board情報を読み込みrowという変数でmap保存⇒右移動の処理を入れる(6-0-2)
    const newBoard = board.map((row) => moveRowRight(row));
    // 値を返す(6-0-2)
    return newBoard;
}

// 盤面を上に動かす(7-0)
function moveUp(board) {
    // コピーを横一列ずつ取得(7-1)
    const newBoard = board.map((row) => [...row]);
    // とってきたコピーを縦ごとに引っ張ってきて(7-2)
    for (let colIndex = 0; colIndex < 4; colIndex++) {
        const column = [
            board[0][colIndex],
            board[1][colIndex],
            board[2][colIndex],
            board[3][colIndex],
        ];
        // moveRowLeftを適用して合体後の処理にする(7-3)
        const movedColumn = moveRowLeft(column);
        // そこから縦に入れ直す
        for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
            newBoard[rowIndex][colIndex] = movedColumn[rowIndex];
        }
    }

    return newBoard
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
    // 押された矢印キーの種類によって処理を返す(5-0)
    function handleKeyDown(event) {
        // 押されたキーが左矢印なら移動した後の結果を２をつけて返す (5-1)
        if (event.key === "ArrowLeft") {
            const moveBoard = moveLeft(board);
            const boardWithNewTile = addRandomTile(moveBoard);
            setBoard(boardWithNewTile)
        }
        // 押されたキーが右矢印なら移動した後の結果を2をつけて返す(5-2: 6-0)
        if (event.key === "ArrowRight") {
            const moveBoard = moveRight(board);
            const boardWithNewTile = addRandomTile(moveBoard);
            setBoard(boardWithNewTile)
        }
        if (event.key === "ArrowUp") {
            const moveBoard = moveUp(board);
            const boardWithNewTile = addRandomTile(moveBoard);
            setBoard(boardWithNewTile)
        }
    }

    return (
        <div className="game" tabIndex="0" onKeyDown={handleKeyDown}>
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