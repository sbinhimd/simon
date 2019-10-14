var gameTable = document.createElement("div");
document.body.appendChild(gameTable);
var startTable = document.createElement("aside");
startTable.style.width = "100%";
startTable.style.alignContent = "center";
document.body.appendChild(startTable);

var autoArr = [];
var userArr = [];

var red1 = document.createElement("button");
var blue2 = document.createElement("button");
var yellow3 = document.createElement("button");
var green4 = document.createElement("button");
var start = document.createElement("button");
var audio1 = document.createElement("audio");
var audio2 = document.createElement("audio");
var audio3 = document.createElement("audio");
var audio4 = document.createElement("audio");
var roundArea = document.createElement("h3");

audio1.setAttribute("id", "audio1");
audio1.setAttribute(
  "src",
  "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
);

audio2.setAttribute("id", "audio2");
audio2.setAttribute(
  "src",
  "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
);

audio3.setAttribute("id", "audio3");
audio3.setAttribute(
  "src",
  "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
);

audio4.setAttribute("id", "audio4");
audio4.setAttribute(
  "src",
  "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
);
var roundForLoop = 0;
var roundNumber = 0;
start.setAttribute("id", "start");

function roundF() {
  userArr = [];
  start.style.display = "none";

  roundNumber += 1;
  roundArea.innerText = `Round : ${roundNumber} `;

  var random = Math.floor(Math.random() * 4) + 1;

  autoArr.push(random);

  autoArr.forEach(element => {
    setTimeout(() => {
      if (element == 1) {
        audio1.play();
        red1.style.opacity = "0.7";
        setTimeout(function() {
          red1.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000);

    setTimeout(() => {
      if (element == 2) {
        audio2.play();

        blue2.style.opacity = "0.7";
        setTimeout(function() {
          blue2.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000);

    setTimeout(() => {
      if (element == 3) {
        audio3.play();
        yellow3.style.opacity = "0.7";
        setTimeout(function() {
          yellow3.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000);

    setTimeout(() => {
      if (element == 4) {
        audio4.play();
        green4.style.opacity = "0.7";
        setTimeout(function() {
          green4.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000);
  });
  red1.setAttribute("id", 1);
  blue2.setAttribute("id", 2);
  yellow3.setAttribute("id", 3);
  green4.setAttribute("id", 4);

  red1.setAttribute("class", "buttonR");
  blue2.setAttribute("class", "buttonB");
  yellow3.setAttribute("class", "buttonY");
  green4.setAttribute("class", "buttonG");

  red1.setAttribute("onClick", "toArray(1)");
  blue2.setAttribute("onClick", "toArray(2)");
  yellow3.setAttribute("onClick", "toArray(3)");
  green4.setAttribute("onClick", "toArray(4)");
}

start.setAttribute("onClick", "roundF()");
start.textContent = "Start";
start.setAttribute("id", "startB");

function toArray(m) {
  userArr.push(m);
  if (m == 1) {
    audio1.play();
  } else if (m == 2) {
    audio2.play();
  } else if (m == 3) {
    audio3.play();
  } else if (m == 4) {
    audio4.play();
  }

  // check if arrays are equal or not
  if (autoArr.length == userArr.length) {
    for (var i = 0; i <= autoArr.length; i++) {
      if (autoArr[i] === userArr[i]) {
        console.log("i'm here");
        roundNumber += 1;
        roundF();
      } else {
        break;
      }
    }
  }
}

console.log(userArr);
console.log(autoArr);

red1.style.backgroundColor = "red";
blue2.style.backgroundColor = "blue";
yellow3.style.backgroundColor = "yellow";
green4.style.backgroundColor = "green";

gameTable.appendChild(red1);
gameTable.appendChild(blue2);
gameTable.appendChild(yellow3);
gameTable.appendChild(green4);
startTable.appendChild(start);
startTable.appendChild(roundArea);
