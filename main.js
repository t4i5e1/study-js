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
console.log(array);
