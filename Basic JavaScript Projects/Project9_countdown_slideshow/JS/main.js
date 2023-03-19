function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = ""
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i; //setting var i as index
  let slides = document.getElementsByClassName("mySlides"); //setting var slides to grab images from HTML
  let dots = document.getElementsByClassName("dot"); //setting var dots to grab dot elements from HTML
  if (n > slides.length) {slideIndex = 1} //restart index if index is greater than slide length
  if (n < 1) {slideIndex = slides.length} //establish index to equal slide length
  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";//allows images to be been seen
  dots[slideIndex-1].className += " active";
}