

	
window.onorientationchange = function() { 
  
  var orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;

if (orientation === "landscape-primary") {
  document.getElementById('bg-img').setAttribute("src", "img/home.jpg");
} else if (orientation === "landscape-secondary") {
  document.getElementById('bg-img').setAttribute("src", "img/home.jpg");
} else  (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  document.getElementById('bg-img').setAttribute("src", "img/home_m.jpg");	
} 
  
};


