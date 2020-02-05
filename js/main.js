new WOW().init();

$(document).ready(function() {
  const videoPlayerTemplate = `
  <div class="video-player-wrapper">
    <div id="overlay"></div>
    <div class="video-player toPlay">
      <div class="control">
        <iframe
          src="https://player.vimeo.com/video/46065546"
          width="800"
          height="500"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div class="esc-video">X</div>
      </div>
    </div>
  </div`;
  // herobox transition
  $('div.showcase-animation').addClass('primary-transition');

  // video-player clicked transition
  $('#video-showcase .play-button button').on('click', function() {
    $(this).hide();
    $(videoPlayerTemplate).appendTo('body');

    /**
     *
     * Vimeo player object creation
     * jQuery object returns an array-like object of selected elements
     *
     */
    const iframe = $('iframe')[0];
    const videoPLayer = new Vimeo.Player(iframe);
    videoPLayer.play();

    // adding the esc control event
    $('body .video-player .control .esc-video').on('click', function() {
      $('#video-showcase .play-button button').show();
      $('.video-player-wrapper').remove();
    });
  });
});
