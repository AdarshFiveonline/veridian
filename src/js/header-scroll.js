$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $(".header").addClass("headeractive");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("headeractive");
        }
    });
});