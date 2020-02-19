// var scroll = new SmoothScroll('a[href*="#"]');
new WOW().init();

// This function will run  a throttled script every 300 ms for the navbar scroll event listener
const checkNavbar = _.throttle(e => {
  // select element to change for scroll events
  console.log(`scrolled`);
  const navbarElement = document.querySelector('#navbar');
  // grab element to signify when to change navbar's style
  const elementToStartChange = document
    .querySelector('section#what-we-do-section')
    .getClientRects()[0].y;
  // console.log(startChangeAtElement);

  // add class sticky pass the 100 pixels
  if (elementToStartChange < 110) {
    navbarElement.classList.add('sticky');
  } else {
    navbarElement.classList.remove('sticky');
  }
}, 300);

window.addEventListener('scroll', checkNavbar);

// Javascript map API
function initMap() {
  // element to display map
  const mapElement = document.querySelector('.map');
  // Business location
  const loc = { lat: 49.900501, lng: -97.139313 };
  // centered map on location
  const map = new google.maps.Map(mapElement, { zoom: 14, center: loc });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

$(document).ready(function() {
  // herobox transition
  $('div.showcase-animation').addClass('primary-transition');

  // Smooth scrolling - all browser support
  $('#navbar a').click(function(e) {
    if (this.hash !== '') {
      e.preventDefault;
      const hash = this.hash;

      $('html').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });

  //hamburguer menu toggle
  $('.hamburguer-btn').click(function() {
    $('.nav-main').toggleClass('nav-main--open');
    $('.nav-toggle__link').toggleClass('nav-toggle__link--hidden');
  });

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

  // Smooth scrolling
});
