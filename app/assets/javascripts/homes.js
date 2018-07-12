// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {
    let i = 1;
    $('a.my_next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (i < 3) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
            i++;
        } else {
            nextImg = currentImg.prev().prev();
            currentImg.removeClass('active');
            nextImg.addClass('active');
            i = 1;
        }


    });

    $('a.my_prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (i > 1) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
            i--;
        } else {
            prevImg = currentImg.next().next();
            currentImg.removeClass('active');
            prevImg.addClass('active');
            i = 3;

        }
    });


})
