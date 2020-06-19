//クリックされた選択肢のidを取得

//最初は選択肢が選択されていないので、選択肢のidに存在しない-1
selectArray = [-1,-1,-1,-1,-1];
scoreArray = [0,0,0,0,0];
qNum = selectArray.length;

//---初期設定
function initFunc(){
    selectArray = [-1,-1,-1,-1,-1];
    scoreArray = [0,0,0,0,0];
    qNum = selectArray.length; //--lengthにて配列要素を取得し、質問数の取得
}

function preloadFunc() {
    for(let i = 0; i < arguments.length; i++) {
        $('<img>').attr('src', arguments[i]);
    }
}

//---もう一度ボタンの処理
function ageinFunc() {
    moveFunc(-1);
    for(let i in selectArray) {
        const selectID = selectArray[i];
        $("#" + i + "_" + selectID).removeClass('selected');
    }
    //情報のリセット
    initFunc();
}

//---回答処理（ラジオボタンの処理）
function quesFunc(){
    //0_1のidを取得する場合、splitにより0と1に分解する。
    const idArray = this.id.split('_');
    //配列アクセス演算子を利用して、分解した0をqIDに格納する。
    //Numberメソッドを利用して数値に変換
    const qID = Number(idArray[0]);
    //配列アクセス演算子を利用して、分解した1をqIDに格納する。
    //Numberメソッドを利用して数値に変換
    const ansID = Number(idArray[1]);
    const selectID = selectArray[qID]; //---選択されたIDを取得

    if(ansID === selectID) return;
    $('#' + qID + '_' + ansID).addClass('selected'); //---引数で指定したclass属性を追加
    $('#' + qID + '_' + selectID).removeClass('selected'); //---選択されてたラジオボタンを戻す
    selectArray[qID] = ansID;
    moveFunc(qID); //--移動処理

    scoreArray[qID] = Number($(this).attr('sc'));

    if(qID+1 >= qNum) resultFunc(); //--最後の質問かをチェック
}

//---結果の処理
function resultFunc(){
    //--合計特典の算出
    let totalScore = 0;
    for(let i in scoreArray) {
        totalScore += scoreArray[i];
    }
    switch (true) {
        case totalScore >= 80:
            var lv = 4;
            break;
        case totalScore >= 60:
            var lv = 3;
            break;
        case totalScore >= 40:
            var lv = 2;
            break;
        case totalScore >= 20:
            var lv = 1;
            break;
        default:
            var lv = 0;
    }
    $('#resultPoint').text(totalScore);
    // レベルにあった画像を表示
    $('#resultImage').css('background-image', "url('images/lv"+lv+".png')");

    const myData = resultArray[lv];
    $('#resultTitle').text(myData.split(',')[0]);
    $('#resultText').text(myData.split(',')[1]);
}

//--移動処理
function moveFunc(vol) {
    const myPos = (vol+1) * -650;
    $('#qContainer').delay(500).animate({left: myPos}, 500);
}

$(function(){
    initFunc(); //---初期化
    //テキストデータの読み込み
    $.get('result.csv', function(myData){
        resultArray = myData.split('\r\n');
    });
    preloadFunc('images/lv0.png','images/lv1.png','images/lv3.png','images/again.jpg');
    $('ul>li').click(quesFunc); //--回答処理
    $('#againButton').click(ageinFunc);
});
