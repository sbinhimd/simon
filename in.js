

var hardB = document.getElementById("H")
var midB = document.getElementById("M")
var easyB = document.getElementById("E")
var start = document.getElementById("startB")
var level;




hardB.classList.add("levelB")
midB.classList.add("levelB")
easyB.classList.add("levelB")

hardB.addEventListener("click", function(){
    hardB.classList.add("levelChoosen")
    midB.classList.remove("levelChoosen")
    easyB.classList.remove("levelChoosen")
    level=3

  });

  midB.addEventListener("click", function(){
    midB.classList.add("levelChoosen")
    hardB.classList.remove("levelChoosen")
    easyB.classList.remove("levelChoosen")
    level=2
  });

  easyB.addEventListener("click", function(){
    easyB.classList.add("levelChoosen")
    midB.classList.remove("levelChoosen")
    hardB.classList.remove("levelChoosen")
    level=1
  });

  start.addEventListener("click", function(){
      if(level==undefined){
        Swal.fire("Choose a level first!") 
      }else{
          roundF(level)
      }
    
  });

