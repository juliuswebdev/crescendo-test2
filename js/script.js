$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 100 ) {
            $('.header-top').addClass('fixed');
        } else {
            $('.header-top').removeClass('fixed');
        }
    });

    $('.hambuger-menu a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            href = $this.attr('href');
        $this.parent().toggleClass('active');
        $(href).slideToggle('active');
        if($this.parent().hasClass('active')) {
            $('body').append('<div class="overlay"></div>');
        } else {
            $('.overlay').remove(); 
        }
    });

    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        dots: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false
              }
            },
        ]
    });

    $('.events-area').eqHeights({child:'.event-item'});
});