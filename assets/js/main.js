
let click = 0
function myFunction() {
    var menu = document.getElementById("menu");
    var icon = document.getElementById("icon");
    
    if (click % 2 == 0) {
      icon.src = "/images/icon-hamburger.svg";
      menu.style.display = 'none';
    }else  {
      icon.src = "/images/icon-close-menu.svg";
      
      menu.style.display = 'flex';
    }
   
    console.log(click)
    click += 1 
   
    console.log(icon.src)
  } 