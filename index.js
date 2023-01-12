const shareDesktop = document.getElementById("share-icon-desktop")

document.getElementById("share-icon-mobile").addEventListener("click", function () {
    document.getElementById("profile").style.display = "none"
    document.getElementById("share-div").style.display = "flex"
})

shareDesktop.addEventListener("click", function () {
    document.getElementById("share-div").style.display = "flex"
    document.getElementById("romb").style.display = "flex"
    shareDesktop.style.backgroundColor = "#bfdbf7"
    shareDesktop.style.color = "white"
})