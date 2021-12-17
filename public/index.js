const color0 = document.getElementById("color0"),
      color1 = document.getElementById("color1"),
      color2 = document.getElementById("color2"),
      color3 = document.getElementById("color3"),
      scoreBox = document.getElementById("score"),
      playButton = document.getElementById("play-button"),
      maxLevel = 100
var sequence, level = 1, subLevel = 0, score = 0

function play() {
    playButton.classList.add("hidden")
    genSequence()
    sequenceColors()
    addEvents()
}
