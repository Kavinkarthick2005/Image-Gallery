function viewImage(img) {
    document.getElementById("largeImage").src = img.src;
    document.getElementById("overlay").style.display = "flex";
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}
