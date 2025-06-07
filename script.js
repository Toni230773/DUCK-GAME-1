
// script.js
const synth = window.speechSynthesis;
let mouthInterval;

function speak(text) {
  if (!('speechSynthesis' in window)) return alert('Your browser does not support speech synthesis.');
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.onstart = animateMouth;
  utter.onend = stopMouth;
  synth.speak(utter);
}

function animateMouth() {
  const mouth = document.querySelector('.mouth');
  mouthInterval = setInterval(() => {
    mouth.classList.toggle('open');
  }, 200); // toggle every 200ms
}

function stopMouth() {
  clearInterval(mouthInterval);
  document.querySelector('.mouth').classList.remove('open');
}
