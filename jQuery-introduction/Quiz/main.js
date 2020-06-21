$(function(){
    $('.answer').hide();
    $('.clickArea').click(function(){
        $(this).children('.answer').show();
    }); 
});