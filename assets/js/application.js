//costumcursor
new kursor({
    type: 4,
    removeDefaultCursor: true
});

//mcostumscrollbar
(function($){
    $(window).on('load',function(){
        $('body').mCustomScrollbar({
            theme: 'rounded-dark'
        });
    });
})(jQuery);

$(document).ready(function (){

    //LoadingIncludeFile
    $('#header').load('includes/header.html');
    if($('#header').length){$('head').append($('<link rel="stylesheet" type="text/css"/>').attr('href','assets/css/header.css'));}
    $('#footer').load('includes/footer.html');
    if($('#footer').length){$('head').append($('<link rel="stylesheet" type="text/css"/>').attr('href','assets/css/footer.css'));}

    //HeaderJS
    $(document).on('click','#headerToggle',function(){
        $(this).parents('#header').toggleClass('close');
    });
    $(document).on('click','#navigation a',function(){
        $(this).parents('#header').addClass('close');
        $(this).parents('.headerBlock').find('.headerBorder').css('border-color', $(this).find('span').css('color'));
        $(this).parents('#wrapper').find('.page').removeClass('active');
        //ToShowView
        $(this).parents('#wrapper').find('#'+$(this).attr('class')).addClass('active');
    });
    

});