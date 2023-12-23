// =======font-change js work here=====
let about_btn_1 = document.getElementById("about_btn_1");
let about_btn_2 = document.getElementById("about_btn_2");
let text_1 = document.getElementById("text-1");
let text_2 = document.getElementById("text-2");

about_btn_1.addEventListener("click", function(){
    text_1.classList.toggle("about_toggle_text_active");
    text_2.classList.remove("about_toggle_text_active");
})

about_btn_2.addEventListener("click", function(){
    text_1.classList.remove("about_toggle_text_active");
    text_2.classList.toggle("about_toggle_text_active");
})

// ===js-3 Slideshow work here===
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}

function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if ( n> slides.length ) {slideIndex=1}
    if ( n<1 ) {slideIndex = slides.length}

    for (i = 0; i <slides.length; i++) {
        slides[i].style.display ="none";
    }
    for (i=0; i<dots.length; i++) {
        dots[i].className =dots[i].className.replace('active', "")
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += 'active';
}