var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// functions to control through dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // if last element of slides array is reached it jumpes back to the first one
  if (n > slides.length) { 
      slideIndex = 1
  } 
  // ? EHLER: WHat does this do?
  if (n < 1) {
    slideIndex = slides.length
  }
  // loop through slides array and hide all elements by default
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  // loop through slides dots and only display the active one by adding active to the class 
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
} 