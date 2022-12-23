// Fucntion: Frequency Generator
var context = null;
var usingWebAudio = true;
if (typeof AudioContext !== 'undefined') {
        context = new AudioContext();
    } else if (typeof webkitAudioContext !== 'undefined') {
        context = new webkitAudioContext();
    } else {
        usingWebAudio = false;
}

var playing = false;
var osc = null;
var freq = 202;

function toggle() {
    var button = document.getElementById("toggle");
    if (playing && osc) {
        playing = false;
        osc.stop(0);
        button.value = "▶️";
    } else {
        playing = true;
        osc = context.createOscillator();
        osc.connect(context.destination);
        osc.frequency.value = freq;
        osc.start(0);
        button.value = "⏸️";
    }
}

function updateFreq(newFreq) {
    freq = newFreq;
    if (osc) {
        osc.frequency.value = freq;
    }
    
    var text = document.getElementById("freqText").value = freq;

    if (text > 20000) {
        document.getElementById("freqText").value = 202;
        alert("Please Enter value Between 1 to 20000 Hz")
    }
        document.getElementById('water').onclick = function (){
            document.getElementById('freqText').value="165";
            osc.frequency.value = "165";
        }
        document.getElementById('memry').onclick = function (){
        alert("Use Headphones for Better Results"); document.getElementById('freqText').value="40";
        osc.frequency.value = "40";
    }
}

window.onload = function() {
    if (!usingWebAudio) {
        document.getElementById("audioControls").innerHTML = "<p>Web audio required.</p>"
    }
}


