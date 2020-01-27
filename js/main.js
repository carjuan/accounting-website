// const loadClass = () => {
//   const heroBoxElem = document.querySelector('.showcase-animation');
//   heroBoxElem.classList.add('primary-transition');
// };

// window.onload = loadClass;

/**
 * Next lines will try the same as vanilla but with jQuery
 */

$(document).ready(function() {
  $('div.showcase-animation').addClass('primary-transition');
  // $(window).scroll(function(e) {
  //   console.log(this.scrollY);
  // });
  $('#video-showcase .play-button button').on('click', function() {
    $(this).hide();
    $('#video-showcase .video-player').addClass('active');
    $('body').addClass('video-isActive');
  });
});
// window.addEventListener('scroll', function(e) {
//   // console.log(e);
//   console.log(this.scrollY);
// });
