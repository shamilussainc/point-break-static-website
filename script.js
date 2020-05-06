window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#5b5349";
  } else {
    document.getElementById("navbar").style.background = "#00000000";
  }
} 


function hidemenu() {
    document.getElementById("nav-trigger").checked = false; 
}
