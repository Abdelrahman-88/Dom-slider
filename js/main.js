"use strict";

let imgItem = Array.from(document.getElementsByClassName("img-item"));
let lightboxContainer = document.querySelector(".lightbox-container");
let lightboxImg = document.getElementById("lightboxImg");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let closeImg = document.getElementById("close");
let imgIndex;



for (let i = 0; i < imgItem.length; i++) {
    imgItem[i].addEventListener("click", function (e) {
        imgIndex = imgItem.indexOf(e.target);
        let imgSrc = e.target.src;
        $(".lightbox-container,#lightboxImg").fadeIn(500, function () {
            lightboxContainer.classList.replace("d-none", "d-flex");
            lightboxImg.setAttribute("src", `${imgSrc}`);
            $("body").css("overflow-y", "hidden");
        });

    });

}

next.addEventListener("click", function () {
    slideImg(1);
});

prev.addEventListener("click", function () {
    slideImg(-1);
});

function slideImg(i) {
    imgIndex = imgIndex + i;
    if (imgIndex == imgItem.length) {
        imgIndex = 0;
    }
    else if (imgIndex < 0) {
        imgIndex = 5;
    }
    let imgSrc = imgItem[imgIndex].src;
    $("#lightboxImg,.lightbox-item").fadeOut(500, function () {
        lightboxImg.setAttribute("src", `${imgSrc}`);
        $("#lightboxImg,.lightbox-item").fadeIn(500, function () {
            lightboxImg.setAttribute("src", `${imgSrc}`);
        });
    });
}

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeSlide();
    }
    else if (e.key == "ArrowRight") {
        slideImg(1);
    }
    else if (e.key == "ArrowLeft") {
        slideImg(-1);
    }
});

lightboxContainer.addEventListener("click", function (e) {
    if (e.target != lightboxImg & e.target != prev & e.target != next) {
        closeSlide();
    }

});

closeImg.addEventListener("click", function () {
    closeSlide();
});

function closeSlide() {
    $(".lightbox-container").fadeOut(500, function () {
        lightboxContainer.classList.replace("d-flex", "d-none");
        $("body").css("overflow-y", "auto");
    });
}










