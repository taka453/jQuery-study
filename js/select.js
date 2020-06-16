// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // 未選択のセレクトボックス
  const $noneSelected = $('#none-selected-items');

  // 選択済みのセレクトボックス
  const $selected = $('#selected-items');

  // 右に移動
  $('.js-item-to-right').on('click', function () {
    // 選択されているoption(option:selected)を取得
    const option = $('#none-selected-items option:selected');
    // 選択を解除
    option.prop('selected', false);
    // 選択済みのセレクトボックスに移動
    $selected.append(option);
  });

  // 右に全て移動
  $('.js-item-to-right-all').on('click', function () {
    // 全てのoptionを取得
    const option = $('#none-selected-items option');
    // 選択済みのセレクトボックスに移動
    $selected.append(option);
  });

  // 左に移動
  $('.js-item-to-left').on('click', function () {
    // 選択されているoption(option:selected)を取得
    const option = $('#selected-items option:selected');
    // 選択を解除
    option.prop('selected', false);
    // 未選択のセレクトボックスに移動
    $noneSelected.children('option');
  });

  // 左に全て移動
  $('.js-item-to-left-all').on('click', function () {
    // 全てのoptionを取得
    const option = $('#selected-items option');
    // 未選択のセレクトボックスに移動
    $noneSelected.children('option');
  });
});
