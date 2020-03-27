// var scene = new THREE.Scene();
// var camera  = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
// var renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setClearColor('#e5e5e5');
// renderer.setSize(window.innerWidth,window.innerHeight);
// document.body.appendChild(renderer.domElement);


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