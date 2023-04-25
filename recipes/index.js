template = '<h6>FULLNAME</h6><button onClick="on(this)" recipe="RECIPID"><img src="../dishsprites/RECIPID.png" alt="FULLNAME"></button>'

var node;
var textnode;

for (var pees of Object.keys(RECIPES)) {

    text = template.replace("FULLNAME", RECIPES[pees]["Name"]).replace("RECIPID", pees);
    text = text.replace("FULLNAME", RECIPES[pees]["Name"]).replace("RECIPID", pees);

    node = document.createElement("li");
    node.setAttribute("id", pees);
    node.setAttribute("class", "recipe");
    document.getElementById("recipelist").appendChild(node);

    document.getElementById(pees).innerHTML = text;
}




function on(id) {

    let recipe = id.getAttribute("recipe");

    // set title
    document.getElementById("title").innerHTML = RECIPES[recipe]["Name"];

    // set description
    if (Object.keys(RECIPES[recipe]).includes("Effect")) {
        document.getElementById("desc").innerHTML = RECIPES[recipe]["Effect"];
    } else {
        document.getElementById("desc").innerHTML = "No Effect."
    }
    if (Object.keys(RECIPES[recipe]).includes("Recipe")) {
        document.getElementById("rec").innerHTML = RECIPES[recipe]["Recipe"];
    }  
    
    // make overlay visible
    document.getElementById("overlay").style.display = "block";

}

function off(id) {
    document.getElementById("overlay").style.display = "none";
}