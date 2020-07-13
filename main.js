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

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

// EventListeners

video.addEventListener("click", toggleVideoStatus);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
