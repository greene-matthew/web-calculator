function raise_error(message) {

    console.log("Disabling operators.");
    toggle_operators();
    
    alert("ERROR: " + message);
    
    console.log ("Reenabling operators.");
    toggle_operators();

}

//This function flips the state of all of the buttons under the "button operator" class
function toggle_operators() {
    
    var operators = document.getElementsByClassName("button operator");
    for (var i=0; i < operators.length; i++) {
        
        var operator = operators[i];
        operator.disabled = !operator.disabled;

    }

}

window.onload = function() {

    

}