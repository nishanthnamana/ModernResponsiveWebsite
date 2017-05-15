/*=====================================================
    ---- BUTTONS GENERAL ----
=====================================================*/
$(function () {
    // This will initiate the WOW plugin.
    new WOW().init();
});

/*=====================================================
    ---- WORK Images ----
=====================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', //child item selector, by clicking on it pop up will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*=====================================================
    ---- Carousel ----
=====================================================*/

$(function () {

    $(".team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 800,
        loop: true,
        autoplayHoverPause: true,
        autoplaySpeed: 900
    });
    
    
    
});

$(function(){
    
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 800,
        loop: true,
        autoplayHoverPause: true,
        autoplaySpeed: 900
    });
    
    
});$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 800,
        loop: true,
        autoplayHoverPause: true,
        autoplaySpeed: 900
         });
    });



/*=====================================================
    ---- Counter ----
=====================================================*/


$(function(){
    $('.counter').counterUp({
                delay: 10,
                time: 3000
            });

});


