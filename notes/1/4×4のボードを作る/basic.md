まず前提としてやっていること
・2048の盤面データを描画している
・ほかのファイルとの連携

reactは
データ（state）→見た目（UI）につなげる
これを自動でつなげるライブラリ
データを更新する作業なんか自動でやる

import {useState} from "react";
reactの状態管理機能を使うの宣言
状態（state）→変化するデータのこと
・score/board/gameover etc

const [board,setBoard] = useState([])
boardを現在のデータとして⇒setBoardがboardを書き換える専用関数
boardからsetBoardに変更を加える