
(function (window) {
    var helloSpeaker = {},
        speakWord = 'Hello';

    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
        textarea.value += speakWord + " " + name + '\r\n';
    }

    window.helloSpeaker = helloSpeaker;

})(window);
