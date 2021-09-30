// Helpful tutorial: https://www.javascript-coder.com/javascript-form/javascript-calculator-script/
var ship_type = new Array();
ship_type["Large Cargo"] = 30000;
ship_type["Small Cargo"] = 6000;


function getQuantTotals() {
    // Link to the form data
    var theForm = document.forms["cargoForm"]

    // Collect the material quantities entered
    var metalQuant = parseInt(theForm.elements["metalCap"].value);
    var crysQuant = parseInt(theForm.elements["crysCap"].value);
    var deuQuant = parseInt(theForm.elements["deuCap"].value);

    // Retrive the capacity of the selected ship
    var shipCap = 0
    var selectedShip = theForm.elements["shipType"];
    shipCap = ship_type[selectedShip.value];

    // Do the math and update the HTML
    var total = metalQuant + crysQuant + deuQuant;
    var numShips = Math.round(total / shipCap)

    if (numShips < 1) {
        numShips = 1
    }

    document.getElementById('totalShips').innerHTML = "Total Required Ships: " + numShips;
}