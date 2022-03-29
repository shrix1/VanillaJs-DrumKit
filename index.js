//event
window.addEventListener("keydown", play);

//function
function play(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    btn.classList.add("pressed");
    
    //(remove pressed class its a dump way) but i learned setInterval func
    setInterval(() => {
      btn.classList.remove("pressed");
    }, 300);
  }
}
