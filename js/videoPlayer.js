export const videoPlayerInit = () => {

const videoPlayer = document.querySelector('.video-player'),
  videoButtonPlay = document.querySelector('.video-button__play'),
  videoButtonStop = document.querySelector('.video-button__stop'),
  videoProgress = document.querySelector('.video-progress'),
  videoTimePassed = document.querySelector('.video-time__passed'),
  videoTimeTotal = document.querySelector('.video-time__total');
const videoVolume = document.querySelector('.video-volume');
const videoFullscreen = document.querySelector('.video-fullscreen');

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove('fa-pause');
      videoButtonPlay.classList.add('fa-play');
    } else {
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    }
  };

  const togglePlay = () => {
      if (videoPlayer.paused) {
        videoPlayer.play();
      } else {
        videoPlayer.pause();
  
      }
      toggleIcon();
  };
  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  };

  const addZero = n => n < 10 ? '0' + n : n;
  videoPlayer.addEventListener('click', togglePlay); 
  videoButtonPlay.addEventListener('click', togglePlay);


  videoPlayer.addEventListener('play', toggleIcon);
  videoPlayer.addEventListener('pause', toggleIcon);

  videoButtonStop.addEventListener('click', stopPlay);

  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100;

    let minutePassed = Math.floor(currentTime / 60);
    let secondPassed = Math.floor(currentTime % 60);
    let minuteTotal = Math.floor(duration / 60);
    let secondTotal = Math.floor(duration % 60);

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
  });

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  });

  videoFullscreen.addEventListener('click', ()=> {
    videoPlayer.requestFullscreen();
  });
  videoVolume.addEventListener('input', () => {
    videoPlayer.volume = videoVolume.value / 100;
  });
  videoVolume.value = videoPlayer.volume * 100;
};