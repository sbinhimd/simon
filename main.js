var gameTable = document.createElement("div");
document.body.appendChild(gameTable);

var autoArr = [];
var userArr = [];

var red1 = document.createElement("button");
var blue2 = document.createElement("button");
var yellow3 = document.createElement("button");
var green4 = document.createElement("button");
var start = document.createElement("button");
var audio1= document.createElement("audio");
var audio2= document.createElement("audio");
var audio3= document.createElement("audio");
var audio4= document.createElement("audio");

audio1.setAttribute("id","audio1");
audio1.setAttribute("src","https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

audio2.setAttribute("id","audio2");
audio2.setAttribute("src","https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");

audio3.setAttribute("id","audio3");
audio3.setAttribute("src","https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

audio4.setAttribute("id","audio4");
audio4.setAttribute("src","https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");



start.setAttribute("id", "start");
function play() {
  var round = 1;
  for (var i = 1; i <= round; i++) {
    var random = Math.floor(Math.random() * 4);
    autoArr.push(random);
  }
  autoArr.forEach(element => {
      if(element==1){
        audio1.play()
        red1.style.backgroundColor = "light red";
        setTimeout(wait,1000)
        red1.style.backgroundColor = "red";
      }else if(element==2){
        audio2.play()
        blue2.style.backgroundColor = "light blue";
        setTimeout(wait,1000)
        blue2.style.backgroundColor = "blue";
      }else if(element==3){
        audio3.play()
        yellow3.style.backgroundColor = "light yellow";
        setTimeout(wait,1000)
        yellow3.style.backgroundColor = "yellow";
      }else if(element==4){
        audio4.play()
        green4.style.backgroundColor = "light green";
        setTimeout(wait,1000)
        green4.style.backgroundColor = "green";
      }
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

start.setAttribute("onClick", "play()");
start.textContent = "Start";
start.setAttribute("id", "startB");

function toArray(m) {
  userArr.push(m);
  if(m==1){
      audio1.play()
}else if(m==2){
    audio2.play()
}else if(m==3){
    audio3.play()
}else if(m==4){
    audio4.play()
}
  
}
function wait(){

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
gameTable.appendChild(start);
