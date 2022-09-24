import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = 0;

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate() {
    player
      .getCurrentTime()
      .then(function (seconds) {
        currentTime = seconds;
      })
      .catch(function (error) {
        console.log(error);
      });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentTime));
};

const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
const parcedTime = JSON.parse(savedTime);
console.log(parcedTime);

player
  .setCurrentTime(parcedTime)
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;
      default:
        break;
    }
  });







