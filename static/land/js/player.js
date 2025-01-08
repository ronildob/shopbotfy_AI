document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".b-play");
    const volumeButton = document.querySelector(".b-volume");
    const volumeSlider = document.querySelector(".b-slider");

    let audio = new Audio(playButton.dataset.stream);
    let isPlaying = false;

    playButton.addEventListener("click", function() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playButton.style.backgroundColor = "var(--player-bg)";
        } else {
            audio.play();
            isPlaying = true;
            playButton.style.backgroundColor = "#d9534f";
        }
    });

    volumeButton.addEventListener("click", function() {
        audio.muted = !audio.muted;
        volumeButton.style.backgroundColor = audio.muted ? "#d9534f" : "var(--player-bg)";
    });

    volumeSlider.addEventListener("input", function() {
        audio.volume = volumeSlider.value / 100;
    });
});
