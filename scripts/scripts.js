//nav menu on mobile

let menuList = document.querySelector("#menu");
let check = document.querySelector("#check");

menuList.addEventListener("click", ()=> {
    check.checked = !check.checked ;
});


//lightbox video

window.document.onkeydown = function(e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    let lightBoxVideo = document.getElementById("yogavideo");
    window.scrollTo(0, 0);
    document.getElementById("light").style.display =  "block";
    document.getElementById("fade").style.display = "block";
    lightBoxVideo.play();
}

function lightbox_close() {
    let lightBoxVideo = document.getElementById("yogavideo");
    document.getElementById("light").style.display = "none";
    document.getElementById("fade").style.display = "none";
    lightBoxVideo.pause();
}

//review section sliders

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//jQuery contact form floating labels effect

$(".box").on("focusin", function(){
    $(this).parent().find("label").addClass("active");
});

$(".box").on("focusout", function(){
    if(!this.value){
    $(this).parent().find("label").removeClass("active");
    }
});

// sweetalert submit button on contact form

document.getElementById('alertbtn').onclick = function(){
    swal({
        title: "Thank you!",
        text: "We appreciate that you've taken time to write us.",
        icon: "success",
        button: "OK",
    });
};


//back to top btn on scroll

$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        $('#topbtn').addClass("show");
    } else {
        $('#topbtn').removeClass("show");
    }
});

$("#topbtn").on("click", function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, "400");
});

