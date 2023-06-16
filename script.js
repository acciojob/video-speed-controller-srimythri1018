// Get the necessary elements
const video = document.querySelector('.player__video');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('input[name="volume"]');
const playbackSpeedInput = document.querySelector('input[name="playbackRate"]');
const skipBackButton = document.querySelector('.player__button[data-skip="-10"]');
const skipForwardButton = document.querySelector('.player__button[data-skip="25"]');

// Update progress bar as the video plays
function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

// Play or pause the video
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

// Set the volume of the video
function setVolume() {
  video.volume = volumeInput.value;
}

// Set the playback speed of the video
function setPlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

// Skip backward by 10 seconds
function skipBackward() {
  video.currentTime -= 10;
}

// Skip forward by 25 seconds
function skipForward() {
  video.currentTime += 25;
}

// Event listeners
video.addEventListener('timeupdate', updateProgressBar);
playButton.addEventListener('click', togglePlay);
volumeInput.addEventListener('input', setVolume);
playbackSpeedInput.addEventListener('input', setPlaybackSpeed);
skipBackButton.addEventListener('click', skipBackward);
skipForwardButton.addEventListener('click', skipForward);
