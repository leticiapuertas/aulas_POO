function getText() {
    var h1 = document.querySelector("h1");
    if (h1 === null || h1 === void 0 ? void 0 : h1.innerText) {
        h1.setAttribute("style", "color:pink");
    }
    else {
        console.log("não achei!");
    }
}
var darkMode = false;
function getTexto() {
    var div = document.querySelector("section");
    if (!darkMode) {
        darkMode = true;
        if (div != null) {
            div.style.backgroundColor = "red";
            div.style.color = "black";
        }
    }
    else {
        darkMode = false;
        if (div != null) {
            div.style.backgroundColor = "blue";
            div.style.color = "black";
        }
    }
}
