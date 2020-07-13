const video = document.querySelector("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// change video status
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// stop video
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function changeIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
// EventListeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
