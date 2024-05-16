// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let seikaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  kaisu = kaisu + 1;

  console.log(kaisu + '回目の予想:' + yoso);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if(kazu()){
    return console.log(sego(yoso));
  }
  return console.log('答えは' + kotae + 'でした。すでにゲームは終わっています。');
}

function kazu(){
    if(kaisu<=3 && seikaisu === 0){
        return true;
    }
    return false;
}

function sego(x){
    if(x===kotae){
        seikaisu = seikaisu+1;
        return '正解';
    }
    return '間違い。答えはもっと'+saizu(x)+'ですよ。';
}

function saizu(x){
    if(x<=kotae){
        return '大きい';
    }
    return '小さい';
}


