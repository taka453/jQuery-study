$(function(){
    $('#switch').click(function(){
        //thisはイベントが発生した要素を指す。
        $(this).toggleClass('active');
    });

    $('button').click(function(){
        //引数に指定したクラスが有るかどうか調査
        const flg = $('#switch').hasClass('active');
        alert(flg);
    });
});

