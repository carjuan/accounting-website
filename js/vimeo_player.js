// Vimeo player object

const iframe = document.querySelector('iframe');
const videoPlayer = new Vimeo.Player(iframe);
const playBtn = document.querySelector('#video-showcase .play-button button');
const escBtn = document.querySelector('body .video-player .control .esc-video');

const playVimeo = function(e) {
  //   console.log(`Wanna know who is clicked? well: ${e}`);
  videoPlayer.play();
  videoPlayer.getCurrentTime().then(function(seconds) {
    console.log(seconds, e);
  });
};

const pauseVimeo = function(e) {
  videoPlayer.pause();
};

playBtn.addEventListener('click', playVimeo);
escBtn.addEventListener('click', pauseVimeo);
