window.addEventListener("orientationchange", function() {
  let or = screen.orientation.angle;
  if(or == 90 || or == 270)
  {
	  document.getElementById('bg-img').setAttribute("src", "img/home.jpg");
} else {
	document.getElementById('bg-img').setAttribute("src", "img/home_m.jpg");
}
});