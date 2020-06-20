function overFunc() {
    $(this).children('p').stop().fadeTo(300, 0.7);
}

function outFunc() {
    $(this).children('p').stop().fadeOut();
}

$(function(){
    $('div').hover(overFunc, outFunc);
});