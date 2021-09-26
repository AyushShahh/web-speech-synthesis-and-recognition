function runSpeechRecognition(box) {
    
    var output = document.getElementById("output");
    
    var action = document.getElementById("action");
    
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done! Click again to start.</small>";
        recognition.stop();
    }
  
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>Text:</b> " + transcript.capitalize() + "<br> <b>Confidence:</b> " + confidence*100+"%";
        output.classList.remove("hide");
    };
  
recognition.start();
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    
    let speech = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = voices[2];
    
    window.speechSynthesis.speak(speech);
}

window.onload = textToAudio;