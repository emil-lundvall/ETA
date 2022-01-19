import $ from 'jquery';

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.header-container').addClass('headerEffect')
    }
    else
    {
        $('.header-container').removeClass('headerEffect')
    }
})