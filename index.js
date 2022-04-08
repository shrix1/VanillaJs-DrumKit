//event
window.addEventListener("keydown", play);

//function
function play(e) {
  const key = e.keyCode; //keycode

  //getting keyCode to play specfic audio
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  
  //getting btn clicks
  const btn = document.querySelector(`button[data-key="${key}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    btn.classList.add("pressed");
    
    //(remove pressed class using setInterval is a dump way) but i learned setInterval func
    setInterval(() => {
      btn.classList.remove("pressed");
    }, 400);
  }
}
