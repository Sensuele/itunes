export const radioPlayerInit = () => {
  
  const radio = document.querySelector('.radio'),
    radioNavigation = document.querySelector('.radio-navigation'),
    radioHeader = document.querySelector('.radio-header__big'), 
    radioItem = document.querySelectorAll('.radio-item'),
    radioCoverImg = document.querySelector('.radio-cover__img'),
    radioStop = document.querySelector('.radio-stop');


  const audio = new Audio();
  audio.type = "audio/aac";

  radioStop.disabled = true;


  const chengeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  };

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  };
  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parent = target.closest('.radio-item');
    selectItem(parent);

    const title = parent.querySelector('.radio-name').textContent;
    radioHeader.textContent = title;

    const urlImg = parent.querySelector('.radio-img').src;
    radioCoverImg.src = urlImg;
    
    radioStop.disabled = false;

    audio.src = target.dataset.radioStantion;
    audio.play();
    chengeIconPlay();
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused ) {
      audio.play();
    } else {
      audio.pause();
    }
    chengeIconPlay();
  });

};