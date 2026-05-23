リスタートボタンを作る
createInitialBoard
空の盤面を作る
const emptyBoard = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ];

    addRandomTileでnullを探しランダムに2をおく
    boardWithTwoTilesは2個目の2を置くときの処理
return で盤面を返す

const [board, setBoard] = useState(createInitialBoard);

 const [board, setBoard] = useState(() =>
        addRandomTile([
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ])
    );
    を書きなおしたやつ

useState(関数)っていう書きかたにすると
”初回のみこの関数を使って”という意味になる
useState(createInitialBoard)で
初回だけcreateInitialBoardを実行する処理
空の盤面を作ってその中に2を作るっていう処理を、関数にしただけ

ボードを触って返しているだけ
stateを触らない処理の場合function Appの外に書きやすい
createInitialBoardはボードを作って送っている
appの外
restartGameはそのボードを使って更新作業をしている
appの中みたいな考え方らしい
腑に落ちんがそんな感じ