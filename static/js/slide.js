/* Container for the slides */
.mySlides, .mySlides1 {
    display: none;
    width: 100%;
}

/* Caption text */
.caption-container {
    text-align: center;
    padding: 10px;
    background-color: #222;
    color: white;
}

/* Style for previous and next buttons */
.prev1, .next1 {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next1 {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev1 {
    left: 0;
    border-radius: 3px 0 0 3px;
}

/* Add a hover effect for previous and next buttons */
.prev1:hover, .next1:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Thumbnail images */
.row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto; /* Allows horizontal scrolling if necessary */
}

.column {
    flex: 0 0 auto; /* Prevents columns from shrinking */
    margin: 2px; /* Add some space between thumbnails */
}

.demo {
    cursor: pointer;
    opacity: 0.6;
}

.demo.active, .demo:hover {
    opacity: 1;
}

/* Number text */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* Responsive adjustments */
@media only screen and (max-width: 600px) {
    .prev1, .next1, .text {
        font-size: 11px;
    }
}
