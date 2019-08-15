$(document).ready(function () {
    $("#a-header").click(function () {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 2000);
    });

    $("#a-team").click(function () {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 2000);
    });


    $("#a-contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });


    $('#search-menu').hide();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $('#search-menu').fadeIn('slow');
        }
        else {
            $('#search-menu').fadeOut('slow');
        }
    });

    $(window).scroll(() => {
        var nav = $(".navbar");
        var a = $("a");
        var navbar_toggler = $(".navbar-toggler");
        var i = $(".fa");
        var search = $(".fa-search")

        if (($(document).scrollTop() + 30) >= $("#team").position().top) {
            nav.css("background", "linear-gradient(#6F0101, #AA1111 , #E52222)");
            nav.css("color", "white");
            a.css("color", "white");
            i.css("color", "white");
            navbar_toggler.css("border-color", "white");
        } else {
            nav.css("background", "#f8f9fa");
            nav.css("color", "black");
            a.css("color", "black");
            i.css("color", "black");
            search.css("color", "white");
            navbar_toggler.css("border-color", "rgba(0, 0, 0, 0.1)");
        }
    });
});