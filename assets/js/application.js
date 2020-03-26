$(document).ready(function (){

    //Including Includes Assets
    $('#header').load('includes/header.html');
    if($('#header').length){$('head').append($('<link rel="stylesheet" type="text/css"/>').attr('href','assets/css/header.css'));}
    $('#footer').load('includes/footer.html');
    if($('#footer').length){$('head').append($('<link rel="stylesheet" type="text/css"/>').attr('href','assets/css/footer.css'));}

    //Pagepiling
    $('#pagepiling').pagepiling({
    });

    //Header
    $(document).on('click','#headerToggle',function(){
        $(this).parents('#header').toggleClass('active');
    });

});