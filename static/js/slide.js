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




/* General Reset */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

/* Gallery Container */
.gallery-container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
}

/* Gallery Slides */
.gallery-slide {
    display: none;
    text-align: center;
}

.gallery-slide .gallery-image {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
}

/* Number Text on Slides */
.numbertext {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 5px;
}

/* Navigation Buttons */
.prev-gallery, .next-gallery {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 16px;
    font-size: 18px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    user-select: none;
    z-index: 1;
}

.prev-gallery {
    left: 10px;
}

.next-gallery {
    right: 10px;
}

.prev-gallery:hover, .next-gallery:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Caption Container */
.caption-container {
    text-align: center;
    background-color: #f2f2f2;
    padding: 10px;
    font-size: 16px;
    font-style: italic;
    color: #555;
}

/* Thumbnails */
.thumbnail-row {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    flex-wrap: wrap;
    gap: 10px;
}

.thumbnail-column {
    flex: 0 0 auto;
    width: calc(100% / 7 - 10px); /* Adjust width based on number of thumbnails */
    max-width: 120px;
}

.thumbnail {
    cursor: pointer;
    width: 100%;
    height: auto;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: border-color 0.3s ease, transform 0.3s ease;
}

.thumbnail:hover {
    border-color: #007BFF; /* Highlight border color */
    transform: scale(1.1); /* Slight zoom effect */
}

/* Dots for Slide Navigation */
.dot {
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin: 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.dot:hover, .dot.active {
    background-color: #007BFF; /* Highlight active dot */
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .gallery-container {
        max-width: 90%;
    }

    .prev-gallery, .next-gallery {
        padding: 10px;
        font-size: 14px;
    }

    .thumbnail-column {
        max-width: 70px;
    }
}

