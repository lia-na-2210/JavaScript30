function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //get the audio with the same keycode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);// get the key with the same keycode
    if(!audio) return; //stop the function from running if there is no audio for that keycode
    audio.currentTime = 0; //rewind the audio to the start
    audio.play(); //plays the audio file
    key.classList.add('playing'); //add the playing css styling

}
    
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip any transition that is not transform
    this.classList.remove('playing');
    //this means what were you originally talking about
    //before you said to add an event listener to each key, then check  when it is done
    //transitioning, so this means that key
}

const keys = document.querySelectorAll('.key') //all the elements with the key class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
