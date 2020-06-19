function myFunction() {
    var x = document.getElementById("toggle-nav-bar");
    if (x.className === "toggle-nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "toggle-nav-bar";
    }
}
