let drop = document.getElementsByClassName("dropdown"); //Ref name for HTML file

for (i = 0; i < drop.length; i++) { //Drops panel down to show content
  drop[i].addEventListener("click", function () {
    this.classList.toggle("active"); //Accesses CSS element to change when dropdown is clicked
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.maxHeight) { //Checks if menu is already open
      dropdownContent.style.maxHeight = null;
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    }
  });
}

function openSlideshow() {
  document.getElementById("mySlideshow").style.display = "block"; //Ref name for HTML file
}

function closeSlideshow() {
  document.getElementById("mySlideshow").style.display = "none"; //Ref name for HTML file
}

let slideIndex = 1; //assign index to picture depending on which is opened
showSlides(slideIndex);

function plusSlides(x) {
  showSlides(slideIndex += x); //move to next slide
}

function currentSlide(y) {
  showSlides(slideIndex = y); //index for current slide
}

function showSlides(z) { //Displays images in slideshow depending on selection index
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (z > slides.length) {
    slideIndex = 1
  }
  if (z < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

