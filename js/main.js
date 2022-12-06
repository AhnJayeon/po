let horizontalUnderline = document.getElementById("horizontal-underline");
let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");


function horizontalIndicator(e) {
    horizontalBar.style.left = e.offsetLeft + "px";
    horizontalBar.style.width = e.offsetWidth + "px";
    horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}


horizontalMenus.forEach(menu=>menu.addEventListener("mouseover",(e)=>horizontalIndicator(e.currentTarget)));

