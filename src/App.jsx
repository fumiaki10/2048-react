import { useState } from "react";
import "./App.css";

function App() {
    const [board, setBoard] = useState([
        [2, null, null, null],
        [null, 4, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]);

    return(
        <div className="game">
            <h1>2048</h1>

            <div className="board">
                {board.flat().map((cell, index) =>(
                <div className="cell" key={index}>
                    {cell}
                </div>
                ))}
            </div>
        </div>
    );
}

export default App;