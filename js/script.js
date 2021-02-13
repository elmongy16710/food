$(function() {


    // wow
    var wow = new WOW({
        mobile : false
    });
    wow.init();

    $('.banner-buttons button').hover(function() {
        $($(this).find('div:first')).animate({
            width : 100 + '%'
        } , 200)
    }, function() {
        $('.banner-buttons button > div:first-of-type').animate({
            width : 0
        } , 200)
    });

    $('#footer-validate').validate();


    $(window).on('scroll' , function() {


        // button scroll to top
        if($(window).scrollTop() >= 300) {
           if($('.scroll-to').is(':hidden')) {
              $('.scroll-to').fadeIn(200)
           }
        }else {
           $('.scroll-to').fadeOut(200)
        }
  
        // button scroll to bottom
        if($(window).scrollTop() >= 200) {
           $('.custom-navbar').addClass('custom-navbar-fixed')
        }else {
           $('.custom-navbar').removeClass('custom-navbar-fixed')
        }
        
     });

     $('.scroll-to-top').on('click', function() {
         $('html , body').animate({
             scrollTop : 0
         }, 500)
     });

     $('.scroll-to-bottom').on('click', function() {
        $('html , body').animate({
            scrollTop : $(document).height()
        }, 500)
    });



});