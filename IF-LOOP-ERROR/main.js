let ok = false;
let maybeOk = true;
if (ok) { //()の中には条件式を入力する
    console.log("OK");
}else if (maybeOk) {
    console.log("maybe OK,,,,")
} else{
    console.log("NO");
}
//okがfalseであるため、5行目以降に判定を進める。そのうえでmaybeOkがtrueであれば6行目でストップする。今回はmaybeOkがtrueなので、consoleに表示されるのはmaybe OK,,,,
ok = 1 === 1; //===は2つの値を比べる演算子、同じ場合にtrueを返し、異なる場合にfalesを返す。a === aの時trueを返し、a === bの時falseを返す。使えるのは数値だけでなく、文字列も使える
ok = 1 !== 2; //!==は2つの値を比べる演算子、異なる場合にtrueを返し、同じ場合にfalesを返す。a !== bの時trueを返し、a !== aの時faleseを返す。使えるのは数値だけでなく、文字列も使える（一般的に!は否定を表すらしい）
ok = 1 == 1; //==は===と同じで、a === aの時trueを返し、a === bの時falseを返す。違いは===は同値演算子と呼び、等値演算子と呼ぶ。==のほうが緩め（型の制約が緩い）なので↓
ok = 1 == "1"; //これはtrueになる
ok = 1 === "1"; //これはfalseになる。基本的には==ではなく、===を使うべき（予期せぬエラーを防ぐため）
ok = 1 != "1"; //これはfaleseになる
console.log(ok);

const coffee1 = {name: "Cafe Latte"};
const coffee2 = {name: "Cafe Latte"}; //19行目と20行目は同じオブジェクトに見えるが{}で囲っている以上、別物として判定される
ok = coffee1 === coffee2; //jsではこれはfalseになる
console.log (ok);

const coffee3 = coffee1;
ok = coffee3 === coffee1;
console.log(ok); //この場合はtrueになる、coffee3にcoffee1を代入しているから。実態は19行目同士を比較しているイメージ

ok = coffee1.name === coffee2.name;
console.log(ok); //この場合はtrueを返す（cafe latteという文字列同士を比較しているため）

const idol1 = ["miko", "suisei"];
const idol2 = ["miko", "suisei"];
ok = idol1 === idol2;
console.log(ok);
