// get all the DOM
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause video
function toggleVideoStatus() {
  // accessing javascript video api with property .paused and also accessing method .play()
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress and timestamp

function updateProgress() {

}

// set video time to progress
function setVideoProgress() {

}

// stop video
function stopVideo() {
video.currentTime = 0;
video.pause();
}

// Event listeners

// this will play video if paused or stopped and pause video if its playing.
video.addEventListener("click", toggleVideoStatus);

// pause and play. this event listener will change to pause icon when you pause it. back to play icon when you click play
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);

// this will run time update
video.addEventListener("timestamp", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
