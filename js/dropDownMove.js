const button = document.getElementById('dropDownButton');

// button.addEventListener('click', function () {
//     if(button.)
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50){
            $("nav").addClass("scrolled");
            $("nav").addClass("scrolled-down");
            } 
        else {
            $("nav").removeClass("scrolled");
            $("nav").removeClass("scrolled-down");
        }
        if ($(document).scrollTop() > 300) {
            $(".nav-link").addClass("color-a");
            $("nav").addClass("scrolled-up");
            } 
        else {
            $(".nav-link").removeClass("color-a");
            $("nav").removeClass("scrolled-up");
        }
    });
});



