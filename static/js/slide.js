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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}
/* General Reset */
* {
    box-sizing: border-box;
}

/* Thumbnail Row */
.thumbnail-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px; /* Adds spacing between thumbnails */
    margin: 10px 0;
}

/* Thumbnail Columns */
.thumbnail-column {
    flex: 0 0 auto; /* Prevent shrinking */
    max-width: 120px; /* Set consistent thumbnail width */
    overflow: hidden; /* Ensure content doesn't overflow */
    border: 2px solid transparent; /* Default border */
    border-radius: 5px; /* Optional rounded corners */
    transition: border-color 0.3s ease, transform 0.3s ease;
}

/* Thumbnail Images */
.thumbnail {
    display: block;
    width: 100%; /* Ensures images fit within the column */
    height: auto; /* Maintains aspect ratio */
    cursor: pointer;
}

/* Hover Effect for Thumbnails */
.thumbnail:hover {
    border-color: #007BFF; /* Highlight border on hover */
    transform: scale(1.1); /* Slight zoom effect */
}

/* Responsive Thumbnails */
@media screen and (max-width: 768px) {
    .thumbnail-column {
        max-width: 90px; /* Adjust size for smaller screens */
    }
}


