
// Carousel speed control
$(document).ready(function(){
    $('.carousel').carousel({
      interval: 5000
    });
});

// For stopping sound after closing video
$(function(){
  $('.modal').on('hidden.bs.modal', function (e) {
    $iframe = $(this).find("iframe");
    $iframe.attr("src", $iframe.attr("src"));
  });
});

