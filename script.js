//navbar change backgound color when scroll down
$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 20){ $('.navbar').addClass('anchorTop') }
        else { $('.navbar').removeClass('anchorTop') }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        autoHeight:true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            500:{
                items:1,
                nav: false
            },
            800:{
                items:2,
                nav: false
            },
            1200:{
                items:3,
                nav: false
            }
        }
    });
})