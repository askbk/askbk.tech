// Used to toggle the menu on small screens when clicking on the menu button
const dropdown = document.getElementById("dropdown"),
    overlay = document.getElementById("overlay");

document.getElementById("navButton").addEventListener("click", e => {
    toggleMenu();
});

overlay.addEventListener("click", e => {
    toggleMenu();
})

function toggleMenu() {
    overlay.classList.toggle("w3-show");
    dropdown.classList.toggle("w3-hide");
}
