function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.body.style.opacity = "2";
}

function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.body.style.opacity = "0.8";
}

function backToUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export { closeNav, openNav, backToUp }