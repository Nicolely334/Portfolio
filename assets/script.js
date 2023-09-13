document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownContent = document.getElementById("menu-content");

    menuIcon.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });
});