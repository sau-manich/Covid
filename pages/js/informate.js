$(function() {
    $('#carousel-example-generic').carousel();
  
    $("#carousel-example-generic").swipe({
      swipeRight: function() {
        $(this).carousel('prev')
      },
      swipeLeft: function() {
        $(this).carousel('next')
      }
    });
  })