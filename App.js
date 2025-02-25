let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector("button");
let txtArea=document.querySelector("textarea")

btn.addEventListener("click",()=>{
    speech.text = txtArea.value;
    window.speechSynthesis.speak(speech); // window.speechsyn.speak == browser.speak
});


let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i]= new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
});