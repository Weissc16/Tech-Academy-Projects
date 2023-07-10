//OPen and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//displays the first image in the slideshow on page load
var slideIndex = 1;
showSlides(slideIndex);

//Changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //all elements with class name "mySlides" are stored in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // all elements with class name "dot" are stored in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // if n is greater than the length of array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // if n is less than 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // this for loop takes each item in the "slides" array and sets the display to none
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the "dots" array and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // this displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //this adds the active styling to the dot associated with the image
}

//this code will create close the contact form when the user clicks off of it
//the first step is to aadd an event listener for any clicks on the website
document.addEventListener("click", function(event){
    //here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element within the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )