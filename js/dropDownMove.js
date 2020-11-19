const button = document.getElementById('dropDownButton');

// button.addEventListener('click', function () {
//     if(button.)
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50){
            $("nav").addClass("scrolled-down");
            } 
        else {
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

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 750){
            console.log("Yeah");
            $(".card1").addClass("scroll-left");
        } 
        else {
            $(".card1").removeClass("scroll-left");
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 870){
            console.log("Yeah 2");
            $(".card2").addClass("scroll-left");
        } 
        else {
            $(".card2").removeClass("scroll-left");
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 990){
            console.log("Yeah 3");
            $(".card3").addClass("scroll-left");
        } 
        else {
            $(".card3").removeClass("scroll-left");
        }
    });
});



