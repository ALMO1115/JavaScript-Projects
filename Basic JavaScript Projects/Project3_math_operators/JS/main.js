function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "" + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML="" + subtraction;
}

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("Multiply").innerHTML="" + multiplication;
}

function division_Function() {
    var division = 48/6;
    document.getElementById("Divide").innerHTML="" + division;
}

function more_Math() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() {
    var remainder = 25 % 6;
    document.getElementById("Remainder").innerHTML="When you divide 25 by 6 you have a remainder of: " + remainder;
}

function negation_Operator() {
    var x = 5
    document.getElementById("Negative").innerHTML = - x
}

var increment = 10;
increment ++
document.write(increment);

var decrement = 16;
decrement --;
document.write(decrement);

document.write(Math.random()*8);

//Math object method--this one rounds to the nearest ten
function roundup_Operator() {
    var up = 23.5
    document.getElementById("roundup").innerHTML = Math.round(up)
}
