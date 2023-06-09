template = '<h6>FULLNAME</h6><button onClick="on(this)" recipe="RECIPID"><img src="../dishsprites/RECIPID.png" alt="FULLNAME"></button>'


var node;
var textnode;

for (var pees of Object.keys(RECIPES)) {

    text = template.replaceAll("FULLNAME", RECIPES[pees]["Name"]).replaceAll("RECIPID", pees);

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

        //format recipe text
        let buf = "<ul>";
        for (var item of RECIPES[recipe]["Recipe"]) {
            buf += "<li>" + "<img  class = 'recipelist' src='../foodsprites/" + item.toLowerCase().replaceAll(' ', '') + ".png'></img></li>";
        }
        buf += "</ul>";

        //add recipe text
        document.getElementById("rec").innerHTML = buf;
    }  
    
    // make overlay visible
    document.getElementById("overlay").style.display = "block";

}

function off(id) {
    document.getElementById("overlay").style.display = "none";
}