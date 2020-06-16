// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // トップへ戻るボタンのエレメントを取得
  const scrollTop = $('.scroll-top');
  // ボタンをクリックしたらページトップまで戻るを実装
  $('span').on('click', function () {
    // スクロールの速度(ミリ秒)
    const scrollSpeed = 300;
    // スムーススクロールを実行
    $('html,body').animate({scrollTop : 0}, scrollSpeed);
  });

  // windowのスクロール位置でボタンの表示・非表示
  $(window).on('scroll', function () {
    // スクロールの速度(ミリ秒)
    const scrollSpeed = 300;
    // 現在のスクロール位置を取得(windowのscrollTopを取得)
    const windowScrolltop = $(window).scrollTop();
    // もし現在のスクロール位置が30を超えていたらトップへ戻るボタンのエレメントをfadeInで表示
    // 30を超えていない場合はfadeOutで非表示
    // if文で記入
    // if(windowScrolltop > 30) {
    //   scrollTop.fadeIn(scrollSpeed);
    // } else {
    //   scrollTop.fadeOut(scrollSpeed);
    // }

    // 三項演算子(condition[条件] ? exprIfTrue[true] : exprIfFalse[false]);
    windowScrolltop > 30 ? scrollTop.fadeIn(scrollSpeed) : scrollTop.fadeOut(scrollSpeed);
  });
});
