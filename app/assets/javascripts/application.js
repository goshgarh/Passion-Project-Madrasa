// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery/dist/jquery.min
//= require @fortawesome/fontawesome-free/js/all
//= require bootstrap/dist/js/bootstrap.min
//= require owl.carousel
//= require toastr/build/toastr.min
//= require homes
//= require activestorage
//= require_tree .

$(document).ready(function () {

    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if ($this.val() === '') {
                label.removeClass('highlight');
            } else if ($this.val() !== '') {
                label.addClass('highlight');
            }
        }

    });

    //    $('.tab a').on('click', function (e) {
    //
    //        e.preventDefault();
    //
    //        $(this).parent().addClass('active');
    //        $(this).parent().siblings().removeClass('active');
    //
    //        target = $(this).attr('href');
    //
    //        $('.tab-content > div').not(target).hide();
    //
    //        $(target).fadeIn(600);
    //
    //    });


})
