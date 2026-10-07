// ========================================
// CAMERA PHOTO GALLERY
// ========================================

function changePicture(clickedPicture) {

    const cameraCard = clickedPicture.closest(".camera-card");

    const mainPicture =
        cameraCard.querySelector(".main-camera-image");

    mainPicture.src = clickedPicture.src;

    const thumbnails =
        cameraCard.querySelectorAll(".camera-thumbnail");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove("active");
    });

    clickedPicture.classList.add("active");
}


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("show-menu");

});