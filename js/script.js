$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    items: 1,
    loop: true,
    margin: 10,
    nav: true
});
$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
});



