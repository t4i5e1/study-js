let count = 0; //初期値を与えなかった場合はundefinedになるよ→要するに変数
count = 30;
let newCount = 0;
const daysInWeek = 7; //ちゃんと初期値を与えないとエラーになるよ→要するに定数（なるべく定数を使ったほうがいいらしい、あと可読性）
let tomatoCount; //tomatoCountはキャメルケース、tomato_countはスネークケース、jsはキャメルケースがいいらしい

let additionResult = 2 + 5; //%を使用した計算は余りを出す→32%5だと2が表示される、**は累乗
let result = 5;
result = result + 10;
result += 10; //line9と同じ計算

//以下+1の時の特殊パターン
result = result + 1;
result += 1;
result++; //+1する前の値を返す
++result; //+1した後の値を返す
