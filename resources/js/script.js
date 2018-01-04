$(document).ready(function(){
    setTimeout(function(){
        $('.title img').addClass('animated fadeInDown');

        setTimeout(function(){
            $('.title-underline').addClass('animated fadeIn');

            setTimeout(function(){
                
                $('.tlt').textillate({ in: { effect: 'fadeIn', delay:25 }});
            
            }, 500);
        }, 500);
    }, 500);
});