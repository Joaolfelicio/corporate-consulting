$(document).ready(function () {
    $("a[href*=#]").on("click", function () {
        var page = $(this).attr("href");
        var speed = 500;
        $("html, body").animate({
            scrollTop: $(page).offset().top
        },
            speed,
            "swing"
        ); 
        return false;
    });
});