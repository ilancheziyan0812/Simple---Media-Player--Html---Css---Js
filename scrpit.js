window.onload = function() {
  var videoPlayer = document.getElementById('video-player');

  videoPlayer.addEventListener('ended', function() {
    // Video playback ended
    console.log('Video playback ended');
  });
  
  videoPlayer.addEventListener('play', function() {
    // Video playback started
    console.log('Video playback started');
  });
  
  videoPlayer.addEventListener('pause', function() {
    // Video playback paused
    console.log('Video playback paused');
  });
};
