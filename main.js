var autoArr = [];
var userArr = [];
var level;
var audio1 = document.createElement("audio");
var audio2 = document.createElement("audio");
var audio3 = document.createElement("audio");
var audio4 = document.createElement("audio");
var roundNumber = 1;

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
var start = document.createElement("button");
var roundArea = document.createElement("h3");
var red1 = document.createElement("button");
var blue2 = document.createElement("button");
var yellow3 = document.createElement("button");
var green4 = document.createElement("button");

function roundF(level) {
  userArr = [];
  start.style.display = "none";

  roundArea.innerText = `Round : ${roundNumber} `;
  for (var i = 0; i < level; i++) {
    var random = Math.floor(Math.random() * 4) + 1;
    autoArr.push(random);
  }

  autoArr.forEach((element, index) => {
    setTimeout(() => {
      if (element == 1) {
        audio1.play();
        red1.style.opacity = "0.7";
        setTimeout(function() {
          red1.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000 * index);
    setTimeout(() => {
      if (element == 2) {
        audio2.play();

        blue2.style.opacity = "0.7";
        setTimeout(function() {
          blue2.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000 * index);

    setTimeout(() => {
      if (element == 3) {
        audio3.play();
        yellow3.style.opacity = "0.7";
        setTimeout(function() {
          yellow3.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000 * index);

    setTimeout(() => {
      if (element == 4) {
        audio4.play();
        green4.style.opacity = "0.7";
        setTimeout(function() {
          green4.style.opacity = "1.0";
        }, 1000);
      }
    }, 2000 * index);
  });

  red1.setAttribute("id", 1);
  blue2.setAttribute("id", 2);
  yellow3.setAttribute("id", 3);
  green4.setAttribute("id", 4);

  red1.setAttribute("class", "buttonR");
  blue2.setAttribute("class", "buttonB");
  yellow3.setAttribute("class", "buttonY");
  green4.setAttribute("class", "buttonG");
  // possble error
  red1.setAttribute("onClick", "toArray(1,level)");
  blue2.setAttribute("onClick", "toArray(2,level)");
  yellow3.setAttribute("onClick", "toArray(3,level)");
  green4.setAttribute("onClick", "toArray(4,level)");
}

function game() {
  //hide start page
  var startd = document.getElementById("startdiv");
  startd.style.display = "none";

  var gameTable = document.createElement("div");
  gameTable.setAttribute("class", "colors");
  document.body.appendChild(gameTable);

  var startTable = document.createElement("aside");
  startTable.style.width = "100%";
  startTable.style.alignContent = "center";
  document.body.appendChild(startTable);

  start.setAttribute("id", "start");
  start.setAttribute("id", "startB");

  red1.textContent = "1";
  blue2.textContent = "2";
  yellow3.textContent = "3";
  green4.textContent = "4";

  red1.style.backgroundColor = "red";
  blue2.style.backgroundColor = "blue";
  yellow3.style.backgroundColor = "yellow";
  green4.style.backgroundColor = "green";

  gameTable.appendChild(red1);
  gameTable.appendChild(blue2);
  gameTable.appendChild(yellow3);
  gameTable.appendChild(green4);
  startTable.appendChild(roundArea);
  roundF(level);
}

function toArray(m,level) {
  userArr.push(m);
  for (var i = 0; i < userArr.length; i++) {
    if (!(userArr[i] == autoArr[i])) {
      //start.style.display = "block";
      Swal.fire(`you have reached round ${roundNumber}`);

      setTimeout(() => {
        location.reload();
      }, 4000);
    } else {
      if (m == 1) {
        audio1.play();
      } else if (m == 2) {
        audio2.play();
      } else if (m == 3) {
        audio3.play();
      } else if (m == 4) {
        audio4.play();
      }
      if(userArr.length==autoArr.length){
        setTimeout(() => {
        roundNumber = roundNumber + 1;
        roundF(level);
      }, 2000);
      }
      
    }
  }

}
function startPage() {
  var startTable = document.createElement("div");
  startTable.setAttribute("id", "startdiv");
  startTable.setAttribute("class", "colors");
  document.body.appendChild(startTable);

  startTable.classList.add("levelDiv");
  var Simon = document.createElement("h1");
  var select = document.createElement("h2");
  Simon.innerText = "Simon Game";
  select.innerText = "Select the level";

  var hardB = document.createElement("button");
  var midB = document.createElement("button");
  var easyB = document.createElement("button");
  var play = document.createElement("button");

  hardB.setAttribute("id", "H");
  midB.setAttribute("id", "M");
  easyB.setAttribute("id", "E");
  play.setAttribute("id", "startB");

  hardB.textContent = "Hard";
  midB.textContent = "Mid";
  easyB.textContent = "Easy";
  play.textContent = "Play";

  hardB.setAttribute("class", "levelChoosen");
  midB.setAttribute("class", "levelChoosen");
  easyB.setAttribute("class", "levelChoosen");
  play.setAttribute("class", "levelChoosen");

  hardB.classList.add("levelB");
  midB.classList.add("levelB");
  easyB.classList.add("levelB");

  hardB.addEventListener("click", function() {
    hardB.classList.add("levelChoosen");
    midB.classList.remove("levelChoosen");
    easyB.classList.remove("levelChoosen");
    level = 3;
  });

  midB.addEventListener("click", function() {
    midB.classList.add("levelChoosen");
    hardB.classList.remove("levelChoosen");
    easyB.classList.remove("levelChoosen");
    level = 2;
  });

  easyB.addEventListener("click", function() {
    easyB.classList.add("levelChoosen");
    midB.classList.remove("levelChoosen");
    hardB.classList.remove("levelChoosen");
    level = 1;
  });
  startTable.appendChild(Simon);
  startTable.appendChild(select);
  startTable.appendChild(hardB);
  startTable.appendChild(midB);
  startTable.appendChild(easyB);
  startTable.appendChild(play);

  play.addEventListener("click", function() {
    if (level == undefined) {
      Swal.fire("Choose a level first!");
    } else {
      game(level);
    }
  });
}
startPage();
