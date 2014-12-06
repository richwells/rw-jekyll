$(document).ready(function() {

//	Fitvids Responsive video
  	 $(".fitvids").fitVids();


    var $container = $('#isotope');

    $container.isotope({
      itemSelector: '.col-related',
      layoutMode: 'masonry'
    });


    //	Scroll to top link
    $.scrollUp();
    $('#scrollUp').html("<i class='fa fa-angle-up'></i>");

});
