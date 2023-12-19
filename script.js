function toggleAudio(){
  var audio = document.getElementById("backgroundAudio");
  audio.play();
}
//document.getElementById("disappearingButton").addEventListener('click', toggleAudio());  

document.getElementById('disappearingButton').addEventListener('click', function() {
    // Check if the audio context is in a suspended state (autoplay policy)
    var audioContext = window.AudioContext || window.webkitAudioContext;
    var context = new audioContext();
    context.resume().then(() => {
      toggleAudio();
    });
  });

// Scroll To Top Function
var scrollToTop = document.getElementById('scrollToTopBtn');
window.onscroll = function (){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollToTop.style.display = "block";
  }else {
    scrollToTop.style.display = "none";
  }
}

scrollToTop.onclick = function (){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Scroll to top function ends here
function hideButton() {
  console.log("Hi")
  var button = document.getElementById('disappearingButton');
  button.style.display = 'none';
}
function toggleMute() {
  var audio = document.getElementById('backgroundAudio');
  var muteButton = document.getElementById('muteButton');

  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Volume up icon
  } else {
    audio.muted = true;
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Volume mute icon
  }
}
