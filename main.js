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

// change play and puase icon
function changeIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  //get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

// EventListeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
