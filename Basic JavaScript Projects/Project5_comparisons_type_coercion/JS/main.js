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



//
document.write("-----------Using Boolean and console.log method:     ")
//



//example of Boolean logic displayed as T or F
document.write(10>2);
document.write(10<2);

//displaying within the console in a browser (accessed in Dev Tools in browser)
console.log(2+2);

//displaying Boolean logic using console.log method
console.log(10<2);

//T or F using ==
document.write(10==10);
document.write(10==2);



//
document.write("----------Using = = =:     ")
//



//using the triple equal sign to display T or F for value and data types
x = 86;
y = 86;
document.write(x===y);

w = "86";
z = 87;
document.write(w===z);

u = "13";
v = 13;
document.write(u===v);

s = "Apple";
t = "Orange";
document.write(s===t);



//
document.write("-----------Using Boolean operators:    ")
//



document.write(5>10 && 10>4);  //AND operator
document.write(5>4 && 10>4);

document.write(5>10 || 10>4);  //OR operator
document.write(5>10 || 10>20);

//NOT operator
function NOT_falseFunction () {
    document.getElementById("NOTf").innerHTML = !(20>10);
}

function NOT_trueFunction () {
    document.getElementById("NOTt").innerHTML = !(20<10);
}