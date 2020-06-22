$(function(){

    $('ul').on('click', 'li', function(){
        $('li.selected').removeClass('selected');
        $(this).addClass('selected');

        myID = this.id.split('_')[1];
        $('#textArea > div').hide();
        $('#text_' + myID).show();

        const myColor = $(this).css('background-color');
        $('#textArea').css('background-color', myColor);
    });

    $('#tab_1').trigger('click');


});

// $(function() {

//     $('ul').on('click', 'li', function(){
//         //要素を設定する
//         $('li.selsected').removeClass('selected');
//         //クリックされた要素をON状態にする
//         $(this).addClass('selsected');
//         //クリックされた要素のid属性の値を取得
//         myID = this.id.split('_')[1];
//         //先に指定した親要素にある子要素
//         $('#textArea > div').hide();
//         $('#text_' + myID).show();

//         //タブの色を取得
//         const myColor = $(this).css('background-color');
//         $('textArea').css('background-color', myColor);
//     });

//     //イベントが設定した後に設定する。
//     $('#tab_1').trigger('click');
// });

