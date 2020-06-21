function onFunc() {
    $('#check').text('ONの処理を実行するよ!');
}

function offFunc() {
    $('#check').text('OFFの処理を実行するよ!');
}

$(function(){
    $('#switch').click(function(){
        //引数で設定したclass属性(active)がない場合はclass属性(active)を追加。
        //thisを利用するイベントが発生した要素を操作
        $(this).toggleClass('active');
        const flg = $(this).hasClass('active');
        if(flg === true) {
            onFunc();
        } else {
            offFunc();
        }
    });
});