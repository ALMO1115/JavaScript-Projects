document.write(typeof "Word"); //to display what type of data "Word" is, in this case it is a "string"
document.write("10" + 5); //using type coercion to change the date type of the string "10" to a numerical type

function trueNaN_Function() { //this is true becauce 'string' is in fact, NaN/Not a Number
    document.getElementById("TrueNaN").innerHTML = isNaN ('string'); //example of using isNaN with a true output
}

function falseNaN_Function() { //this is false because '007' IS a number
    document.getElementById("FalseNaN").innerHTML = isNaN ('007');
}

function NaN_Function() { //this does not need the isNaN because 0 divided by 0 is not possible so it's not a number
    document.getElementById("NaN").innerHTML = 0/0;
}

//example of displaying an infinite number
document.write(2E310);

//example of displaying a negative infinite number
document.write(-3E310);