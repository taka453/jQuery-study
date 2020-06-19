//マジックナンバーの削除（数値の意図を知る事ができる）
const newsHeight = 35;
const hidePos = -45;
//カテゴリを受け取る
function setPosFunc(cate){
    let posNo = 0;
    //divよりも上の階層全て、newsArticle内にあるdiv要素全て
    //要素を引数で指定したfunctionで個別に処理
    $('#newsArticle>div').each(function(index, elem) {
        //記事の要素からclass属性の値を取得
        const myClass = $(elem).attr('class');
        if(myClass === cate || cate === 'all') {
            //目的地の座標を算出
            //posNo = 0 が代入されており、0*35となる
            const myY = posNo*newsHeight + 'px';
            $(elem).stop().animate({top:myY});
            posNo++;
        } else {
            $(elem).stop().animate({top : hidePos});
        }
    });
}

//---指定したメニューをOFFに
function menuResetFunc() {
    $('.cateButton').css('background-image', 'url(images/menu_off.png');
    $('.cateButton').css('color', '#666')
}

//---指定したメニューをONに
function menuOnFunc(target, cate) {
    $(target).css('background-image', 'url(images/menu_on_'+cate+'.png)');
    $(target).css('color', '#fff');
}

$(function(){
    menuOnFunc('#btn_all', 'all')
    setPosFunc('all');
    //メニューをクリック(splitによりbtnが除外され、カテゴリ名だけが取得される)
    $('.cateButton').click(function(){
        const cate = this.id.split('_')[1];
        //カテゴリを渡す。
        setPosFunc(cate);
        menuResetFunc();
        menuOnFunc(this, cate);
    });
});