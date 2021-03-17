function openMenu() {
    let dropdownMenu = document.getElementById("mobile-nav-menu");
    let rocketIcon = document.getElementById('nav-rocket')
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
        rocketIcon.style.transform = "rotate(90deg)";
    } else {
        dropdownMenu.style.display = "none";
        rocketIcon.style.transform = "rotate(0deg)";
    }
}