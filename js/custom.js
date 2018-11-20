
$("body").scroll(function () {
  var $nav = $(".navbar-fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

var slider = new Slider("#ex14", {
    ticks: [0, 20, 40, 60, 80, 100],
    ticks_positions: [0, 20, 40, 60, 80, 100],
    ticks_labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
    ticks_snap_bounds: 1
});

$(document).ready(function(){
    $(".slider-tick").on('click', function(){
        $(".slider-tick-label").css({'width': '88.4px'});
    });
});