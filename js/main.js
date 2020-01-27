$(document).ready(function() {
  // herobox transition
  $('div.showcase-animation').addClass('primary-transition');

  $('#video-showcase .play-button button').on('click', function() {
    $(this).hide();
    $('body .video-player').addClass('toPlay');
    $('#main-wrapper').addClass('isDimmed');
    $('#overlay').addClass('isActive');
  });

  $('body .video-player .control .esc-video').on('click', function() {
    $('body .video-player').removeClass('toPlay');
    $('#main-wrapper').removeClass('isDimmed');
    $('#overlay').removeClass('isActive');
    $('#video-showcase .play-button button').show();
  });
});
