const {ipcRenderer} = require('electron');

ipcRenderer.on('lyricsChange', (event, value) => {
  $('.lyrics-line').text(value).hide().fadeIn();
});

$('.button-close').click(() => {
  ipcRenderer.send('lyricsClose');
});

$('.button-prev').click(() => {
  ipcRenderer.send('lyricsPrevious');
});

$('.button-next').click(() => {
  ipcRenderer.send('lyricsNext');
});

$('.button-pause-play').click(() => {
  // $('.button-pause-play i').toggleClass('pause').toggleClass('play');
  ipcRenderer.send('lyricsPausePlay');
});

$('.album-cover').click(() => {
  ipcRenderer.send('lyricsOpenPlayer');
});

ipcRenderer.on('albumUpdate', (event, value) => {
  $('.album-cover img').attr('src', value);
});