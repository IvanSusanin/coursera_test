(function (window) {
    var byeSpeaker = {},
        speakWord = 'Good Bye';

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
        textarea.value += speakWord + " " + name + '\r\n';
    }

    window.byeSpeaker = byeSpeaker;

})(window);
