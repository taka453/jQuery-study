// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // #から始まるリンク(内部リンク)のクリックイベントに実装
  $('[href^="#"]').on('click', function (event) {
    // デフォルトの動作をキャンセル
    event.preventDefault();
    // スクロールの速度(ミリ秒)
    const scrollSpeed = 300;
    // アンカー(href)の値取得
    const href = $(event.target).attr('href')
    // 移動先を取得(リンク先のidが存在するかを確認してトップに戻るかどうかを切り替える)
    const $link = $((href !== '#' && $(href).length === 1) ? href : 'html');
    // 移動先を数値で取得(エレメントの上端の位置を取得)
    const top = $link.offset().top;
    // 固定のヘッダの高さを取得(隙間を一文字分足しておく)
    const offset = $('.navbar').outerHeight()+68;
    // スムーススクロールを実行
    $('html, body').animate({scrollTop : top - offset}, scrollSpeed, 'swing');
  });
});
