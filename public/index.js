const color0 = document.getElementById("color0"),
      color1 = document.getElementById("color1"),
      color2 = document.getElementById("color2"),
      color3 = document.getElementById("color3"),
      scoreBox = document.getElementById("score"),
      highscoreBox = document.getElementById("highscore"),
      playButton = document.getElementById("play-button"),
      maxLevel = 100
var sequence, level = 1, subLevel = 0, score = 0
let highscore = '0';
var highScore = localStorage.getItem(highscore);
return highScore;

function play() {
    userSequence()
    sequenceColors()
    addEvents()
}

const sequenceColors = () => {
    removeEvents()
    let i
    for (let i = 0; i < level; i++) {
        switch(sequence[i]) {
            case 0:
                setTimeout(() => longLightUp(color0), 1000 * i)
                break
            case 1:
                setTimeout(() => longLightUp(color1), 1000 * i)
                break
            case 2:
                setTimeout(() => longLightUp(color2), 1000 * i)
                break
            case 3:
                setTimeout(() => longLightUp(color3), 1000 * i)
                break
        }
    }
    setTimeout(() => addEvents(), 1000 * i + 1)
}

const pickColor = event => {
    shortLightUp(event.target);
    (colorToNumber(event.target.dataset.color) == sequence[subLevel])
    ? win()
    : lose()
}

const addEvents = () => {
    color0.addEventListener("click", pickColor)
    color1.addEventListener("click", pickColor)
    color2.addEventListener("click", pickColor)
    color3.addEventListener("click", pickColor)
}
const removeEvents = () => {
    color0.removeEventListener("click", pickColor)
    color1.removeEventListener("click", pickColor)
    color2.removeEventListener("click", pickColor)
    color3.removeEventListener("click", pickColor)
}

const updateHighscore = () =>{
  if (highscore<score){
    highscoreBox.innerHTML = score;
    let scoreStr = score.toString();
    window.localStorage.setItem('highscore', scoreStr);
  }
}

const win = () => {
    subLevel++
    if (subLevel == level) {
        subLevel = 0; score += 1; level++
        scoreBox.innerHTML = score
        setTimeout(() => sequenceColors(), 1000)
    }
}

const lose = () => {
    updateHighscore()
    score = 0; subLevel = 0; level = 1;
    scoreBox.innerHTML = score
    swal("", "GAME OVER", "error")
    userSequence()
    removeEvents()
}

const userSequence = () => { //array that records user choice
    sequence = new Array(maxLevel).fill(0).map(n => Math.floor(Math.random() * 4))
}

const longLightUp = color => { //game displays color
    color.classList.add("light")
    setTimeout(() => color.classList.remove("light"), 600)
}
const shortLightUp = color => { //when users click on color
    color.classList.add("light")
    setTimeout(() => color.classList.remove("light"), 200)
}

const colorToNumber = color => {
    switch(color) {
        case "color0":
            return 0
            break
        case "color1":
            return 1
            break
        case "color2":
            return 2
            break
        case "color3":
            return 3
    }
}
