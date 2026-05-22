左移動して反転すれば右移動したことになるよな
...rowで配列をコピーできる
row ボードの横一列情報をコピーする。複製を作ってから
反転する
大抵は元情報を崩すとだめになるのがreactなのでコピーは必須級

[2,null,2,4]を⇒[4,2,null,2]みたいにする処理を行う
　　元　　　　⇒　　コピー

const movedRow = moveRowLeft(reverseRow);
さっき反転した奴にmoveRowLeftでやってる左移動の処理を入れる
nullの除去
合体させ[4,4]の状態が出来上がる
nullの追加
[4,4,null,null]ができあがる

return moveRow.reverse();
最後に反転させて値を実行しょり
結果右側に移動したときと同じ処理
[null,null,4,4]の状態が出来上がる