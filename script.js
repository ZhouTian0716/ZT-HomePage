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
})