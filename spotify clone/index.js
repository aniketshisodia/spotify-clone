// jai shree ram

var size = document.querySelectorAll(".button-song").length;

for(var i = 0 ; i < size ; i++) {
    
    document.querySelectorAll(".button-song")[i].addEventListener("click",function() {
       
       var buttonInnerHTML = this.innerText;
       makeSound(buttonInnerHTML);      
       buttonAnimation(buttonInnerHTML);
     }
    );
  }

  // for pausing 

  

    
    document.querySelectorAll(".pause").addEventListener("click",function() { 
       pauseSound();
      }
    );

  

  function pauseSound() {
    
        var a = new Audio("music/Demons.mp3");
                a.pause();
        var b = new Audio("music/Thunder.mp3");
                b.pause();
        var c = new Audio("music/Believer.mp3");
                c.pause();
        var d = new Audio("music/Bones.mp3");
                d.pause();
        var e = new Audio("music/Enemy.mp3");
                e.pause();
  }

  
  function makeSound(k) {
    switch (k) {
            case "Demons": var a = new Audio("music/Demons.mp3");
                    a.play();
                    break;
            case "Thunder": var b = new Audio("music/Thunder.mp3");
                    b.play();
                    break;
            case "Believer": var c = new Audio("music/Believer.mp3");
                    c.play();
                    break;
            case "Bones": var d = new Audio("music/Bones.mp3");
                    d.play();
                    break;                
            case "Enemy": var e = new Audio("music/Enemy.mp3");
                    e.play();
                    break;
            default: console.log(buttonInnerHTML);
        }
}