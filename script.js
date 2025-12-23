const video = document.getElementById("myVideo");
const controls = document.getElementById("controls");

video.onended = function () {
  controls.classList.remove("hidden");
};

function replayVideo() {
  controls.classList.add("hidden");
  video.currentTime = 0;
  video.play();
}