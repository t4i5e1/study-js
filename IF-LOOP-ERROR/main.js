let ok = false;
let maybeOk = true;
if (ok) { // ()の中には条件式を入力する
    console.log("OK");
}else if (maybeOk) {
    // console.log("maybe OK,,,,")
} else {
    // console.log("NO");
}
// okがfalseであるため、5行目以降に判定を進める。そのうえでmaybeOkがtrueであれば6行目でストップする。今回はmaybeOkがtrueなので、consoleに表示されるのはmaybe OK,,,,
ok = 1 === 1; // ===は2つの値を比べる演算子、同じ場合にtrueを返し、異なる場合にfalesを返す。a === aの時trueを返し、a === bの時falseを返す。使えるのは数値だけでなく、文字列も使える
ok = 1 !== 2; // !==は2つの値を比べる演算子、異なる場合にtrueを返し、同じ場合にfalesを返す。a !== bの時trueを返し、a !== aの時faleseを返す。使えるのは数値だけでなく、文字列も使える（一般的に!は否定を表すらしい）
ok = 1 == 1; // ==は===と同じで、a === aの時trueを返し、a === bの時falseを返す。違いは===は同値演算子と呼び、等値演算子と呼ぶ。==のほうが緩め（型の制約が緩い）なので↓
ok = 1 == "1"; // これはtrueになる
ok = 1 === "1"; // これはfalseになる。基本的には==ではなく、===を使うべき（予期せぬエラーを防ぐため）
ok = 1 != "1"; // これはfaleseになる
// console.log(ok);

const coffee1 = {name: "Cafe Latte"};
const coffee2 = {name: "Cafe Latte"}; //19行目と20行目は同じオブジェクトに見えるが{}で囲っている以上、別物として判定される
ok = coffee1 === coffee2; //jsではこれはfalseになる
// console.log (ok);

const coffee3 = coffee1;
ok = coffee3 === coffee1;
//console.log(ok); // この場合はtrueになる、coffee3にcoffee1を代入しているから。実態は19行目同士を比較しているイメージ

ok = coffee1.name === coffee2.name;
// console.log(ok); // この場合はtrueを返す（cafe latteという文字列同士を比較しているため）

const idol1 = ["miko", "suisei"];
const idol2 = ["miko", "suisei"];
ok = idol1 === idol2;
// console.log(ok);

ok = 1 > 0; // 基本的には数字の比較で比較演算子を使用する（>,<,>=,<=）が、文字列でも使用することは可能
ok = 'a' > 'b'; // この場合、aよりbがアルファベット順ではあとに来るのでbの方が大きい判定なのでfalseとなる
ok = 'A' > 'a'; // この場合、Aの方がaより先→false
// console.log(ok);

ok = 'hello';
if (ok) { // このokにはhelloが入っている
    // console.log(ok); 
    // console.log('OK!');
} else {
    // console.log('NO!'); // 42行目がok = '';ならNO!と表示される、空文字等js側でfalseと判定するものがいくつか存在する（falsy：https://developer.mozilla.org/en-US/docs/Glossary/Falsy）
}

ok = true && false; // &&は論理積演算子と呼ぶ→この場合、falseを返す（ture && trueではtrueを返し、false && falseではfalseを返す）&&の左右両方がtrueの時のみtrueを返す
// console.log(ok);
ok = true || false; // ||は論理和演算子と呼ぶ→この場合、trueを返す（false || falseの時にfalseを返す）||は左右両方がfalseの時のみfalseを返す
// console.log(ok);
ok = 'hello' && 'nya hello' // &&は厳密な定義で言うと、左側の値がtruthyだったら、右側の値を返し、左側の値がfalsyだったら左側の値を返す
// console.log(ok);
ok = 'hello' || 'nya hello' // ||は左側の値がtruthyであれば左側の値を返し、左側の値がfalsyだったら右側の値を返す
// console.log(ok);

const userInput = '';
const userName = userInput || 'User';
// console.log(userName); //userInputが空文字（''）の時、（つまりfalsy）Userを返す（||は左側がfalsyの時、右側の値を返すため）

const X = 15;
ok = X > 10 && X < 20;
ok = X === 10 || X > 12 && userName; //比較演算子には優先順位が存在する。この場合、>が一番優先順位が高いため、X > 12の比較結果が一番最初に出てくる→今回の場合はtrue、次に高いのが===、これはfalseになる。次は&&、今回の場合はtrue（truthy）が左側に来ているのでuserNameを返す。最後に||、左がfalse（falsy）なので右側の値を返す。よって今回はuserNameがokの中身となる。
// console.log(ok); // okの中身がuserNameで58行目でuserInputが空文字であるため返す値は'User'となる
if (ok) {
    // console.log('OK!')
} else {
    console.log('NO!')
}
ok = !true; // !は真偽値を反転させる（この場合のconsole.logはtrueではなく、falseが返る
ok = !!X; // !!は右から順に適用される。この場合、!Xはfalseとなり!Xに!がつくイメージで反転させることでtrueとなる。Xはnumber型だけど!!をつけることで真偽値に型を変換している
// console.log(ok);

const hello = 'nya hello'
{
    const hello = 'NYA HELLO!'
    // console.log(hello);
} // {}はブロック文（ネストもできるよ）

ok = 'nya hello'
ok = ok ? 'OK' : 'NO'; //三項演算子というもの。2個目のokがtruthyであれば'OK'を返し、falsyであれば'NO'を返す。この場合、okで定義されているnya helloはtruthyであるため、'OK'が返る
// console.log(ok);

ok = true;
if (ok) ok = 'OK!'
else ok = 'NO'
// console.log(ok); // やっていることは82行目と同じこと。1行にまとめたい等のときは三項演算子を使ったほうが良い（でも複雑になる場合はif文を使ったほうが良いかもしれない）

// function hololoveMember(holomem) {
    // if (holomem === 'mikochi') {
    //     console.log('NYA HELLO!');
    // } else if (holomem ==='aqua') {
    //     console.log('konAqua'); 
    // } else if (holomem === 'subaru'){
    //     console.log('ajimaru');
    // }
// }
// hololoveMember('subaru'); // これでも良いけどholomem ===を3回も使っているため冗長。そのため以下のようなswitch文を使用する

function hololoveMember(holomem) {
    switch (holomem) {
        case 'mikochi': // case文を使用するときは{ブロック文}を使用してscopeを定めたほうが良い（118行目以降に詳細あり）
            console.log('NYA HELLO!');
            break;
        case 'aqua':
            console.log('konAqua'); 
            break;
        case 'subaru':
            console.log('ajimaru');
            break;
        default:
            console.log('NOT FOUND'); // caseに該当しない場合はこんな処理をしたいよーって時にはdefaulを使用する。今回はhoshimachiという上記3つに該当しないものを指定しているのでNOT FOUNDが返ってくる
    }
}
hololoveMember('hoshimachi');

function hololoveMember(holomem) {
    switch (holomem) {
        case 'mikochi': {
            const message = 'NYA HELLO';
            console.log(message);
            break;
        }
        case 'aqua': {
            const message = 'KON AQUQ';
            console.log(message); 
            break;
        } 
        case 'subaru': {
            const message = ('AJIMARU');
            console.log(message);
            break;
        }
        default: {
            const message = 'NOT FOUND'
            console.log(message);
        }
    }
}
hololoveMember('mikochi'); //ブロック文を使用することで同じmessageを使用することができるようになった