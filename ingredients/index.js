template = '<h6>FULLNAME</h6><button onClick="on(this)" ingredient="INGREID"><img src="../foodsprites/INGREID.png" alt="FULLNAME"></button>'

var node;
var textnode;

for (var greed of Object.keys(INGREDIENTS)) {

    text = template.replace("FULLNAME", INGREDIENTS[greed]["Name"]).replace("INGREID", greed);
    text = text.replace("FULLNAME", INGREDIENTS[greed]["Name"]).replace("INGREID", greed);

    node = document.createElement("li");
    node.setAttribute("id", greed);
    node.setAttribute("class", "ingredient");
    document.getElementById("ingrelist").appendChild(node);

    document.getElementById(greed).innerHTML = text;
}




function on(id) {

    let ingredient = id.getAttribute("ingredient");

    // set title
    document.getElementById("title").innerHTML = INGREDIENTS[ingredient]["Name"];

    // set description
    if (Object.keys(INGREDIENTS[ingredient]).includes("Effect")) {
        document.getElementById("desc").innerHTML = INGREDIENTS[ingredient]["Effect"];
    } else {
        document.getElementById("desc").innerHTML = "No Effect."
    }
    
    // make overlay visible
    document.getElementById("overlay").style.display = "block";

}

function off(id) {
    document.getElementById("overlay").style.display = "none";
}