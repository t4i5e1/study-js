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
