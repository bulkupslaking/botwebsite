function on(id) {
    let ingredient = id.getAttribute("ingredient");
    console.log(ingredient);

    document.getElementById("overlay").style.display = "block";

}

function off(id) {
    document.getElementById("overlay").style.display = "none";
}