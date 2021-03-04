
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


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 