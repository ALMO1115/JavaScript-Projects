function addition_Function() { //Adding
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "" + addition; //"Add" is id used in HTML along with name of function above
}

function subtraction_Function() { //Subtracting
    var subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML="" + subtraction;
}

function multiplication_Function() { //Multiplication
    var multiplication = 6 * 8;
    document.getElementById("Multiply").innerHTML="" + multiplication;
}

function division_Function() { //Division
    var division = 48/6;
    document.getElementById("Divide").innerHTML="" + division;
}

function more_Math() { //Multiple operator math in one problem
    var simple_Math = (1+2)*10/2-5; //remember PEMDAS for oder of operations
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() { //Obtaining just the remainder from a divion problem
    var remainder = 25 % 6;                       //Below is what will display when "Remainder" in HTML is clicked on (along with the remainder variable)
    document.getElementById("Remainder").innerHTML="When you divide 25 by 6 you have a remainder of: " + remainder;
}

function negation_Operator() { //Displaying the negative of the variable
    var x = 5
    document.getElementById("Negative").innerHTML = - x
}

var increment = 10; //Going up one from variable amount
increment ++
document.write(increment);

var decrement = 16; //Going down one from variable digit
decrement --;
document.write(decrement);

document.write(Math.random()*8); //Displaying a random number - also multiplied by 8

//Math object method---this one rounds to the nearest ten
function roundup_Operator() {
    var up = 23.5
    document.getElementById("roundup").innerHTML = Math.round(up)
}
