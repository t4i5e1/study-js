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

let number = 10;
number = -4;
number = 32.42;

let string = 'nya hello!';
number = 'something'; //jsは動的型付け
const userName = 'Miko';
string = 'nya hello! ' + userName;
string = `nya Hello! ${userName}`; //``のみ${hogehoge}が使える
string = "``''"; //``や''を文字として表示させたい場合は、""で囲う、""を表示させたい場合は、''や``で囲むこと
string = '\\' //\を表示させたいときは\\って書く（バックスラッシュを2個書くと1個表示される）

string = 'Nya Hello!\nMiko!'; //改行したいときは\nで改行することができる
string = `NYA HELLO!
MIKO!`; //``を使用する場合のみ、コード上で改行することができる（エラーにならない）""や''では不可能

const userInput = '10.9';
let caluresult;
caluresult = Number(userInput) + 10;
caluresult = parseInt(userInput) + 10;
caluresult = parseFloat(userInput) + 10; //parseIntは小数点を無視して計算する、計算結果は上から順に20.9、20、20.9となる
caluresult = +userInput + 10;

//const tenNumber = 10;
//caluresult = '10' + string(tenNumber);
//caluresult = '10' + tenNumber.toString();

let boolean = true;
boolean = false;

let array = ['Suisei', 'Aqua', 'Towa'];
array = [1, 2, 3];
array = [1, 'Miko', true, array];
array = ['Suisei', 'Aqua', 'Towa'];
//console.log(array[0]); //arrayに入っているSuisei,Aqua,Towaをconsoleに出す場合、出したい文字列等の配列番号を[]にいれる。Suiseiを出力したい場合は0を入力（配列は0スタートだから、1じゃないよ）
array = []; //配列をすべて書かなくてもいい方法↓array.push('hogehoge(letの中身)');と書くことで行ける
array.push('Aqua');

const coffee = {
    name: "Cocolate Moka", //hogehoge: "HOGE"前はkey、後ろはvalue 
    size: 350,
    isHot: true,
    toppings: ["Cinnamon", "Caramel"],
    nutritions: {
        kcal: 500,
        suger: 50,
    },
}
//console.log(coffee.size); //coffee.hogehgoeでcoffeeの中にアクセスできる
coffee.isHot = false //coffeeの中にあるtrueをfalseにしたい時の記述
coffee.barista = "Mikochi"; //coffeeに新しいプロパティを追加したい時の記述

let userInfo = null; //nullは何も無いということを表す（予定通り何も無いよって時使うらしい）
userInfo = undefined; //undifinedも何も無いということを表すが、一般的には予期せぬ（エラー的な）ものを表す→ = undifinedは使わない（明示的に何も無いことを表したい時はnullを使用するべき）

function add(num1, num2) { //()の中にパラメーターを入れることができる
    const value = num1 + num2; //関数の中で定義したものは関数の外側（{}の外）では使えないが、関数の外側で定義されたものは関数の中（スコープ内）で使うことができる（関数の外側、つまりどこでも使える変数をグローバル変数と言い、74行目のvalueの様な変数はローカル変数と言う）
    console.log(value);
    //console.log(num1 + num2); //←76行目のadd();が無い状態（要するに74行目を書いただけではconsoleに出力されない
    return value; //returnが来たタイミングでreture以降の処理はskipされる（今回は79行目までskip→addの内容を取得しているのが79行目だから）
} //関数の後ろの{}には;（セミコロン）を付けない（ついうかつけるな）
//add(2, 3); //関数は呼び出す必要がある、呼び出し方は関数名（今回だったらadd）に();　今回はaddを呼び出したいからadd();と書いている。ちなみに何回も呼び出すことができる。
//↑の時num1には2が入り、num2には3が入る　こんな感じで引数を渡すことができる
const returnedValue = add(2,3); //←これらを戻り値、返り値と言う
