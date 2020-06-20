//---じゃんけんゲーム

function jankenGame() {
    if($('.selected').length === 0) {
        alert('自分の手を選択してください。');
        return;
    }
    //乱数で0,1,2のどれかを作成。
    const evalue = Math.floor(Math.random() * 3);
    //相手の手の一つ前の画像を削除。
    $('.com').remove();
    //相手の手を表示。
    $('.comPanel').append("<img class='com' src='images/janken" + evalue + ".png' />");

    //自分の手として選択されている画像のファイルを取得。
    const pfilename = $('.selected').attr('src');
    //画像のファイル名から正規表現を用いて、数字の部分だけ抽出。
    const pvalue = pfilename.match(/\d/)[0];
    //数字の引き算によって勝敗を判別する。以下の計算式によって、引き分け0、負けは1、勝ちは2の数字がresult変数に格納。
    const result = (pvalue + 3 - evalue) % 3;
    $('.result').text(['あいこ','負け・・・','勝ち!!'][result]);
}

//---プレイヤー選択するとselect。
function onClickPlayerIcon(self) {
    //要素を引数で指定したfunctionで個別
    $('.selected').each(function(){
        $(this).toggleClass('selected');
    });
    $(self).toggleClass('selected');
}