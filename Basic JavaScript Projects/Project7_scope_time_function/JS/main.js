//local scope example
function Add_Numbers_1() {
    var x = 10; //creating a variable assigned w/in a function
    document.write(20 + x + "<br>");
}

function Add_Numbers_2() {
    document.write(x + 100); //x cannot be accessed here because x is only defined within the function, Add_Numbers_1
}
Add_Numbers_1();
Add_Numbers_2();

function Add_Numbers_2() { 
    console.log(x + 100); //debugging here with console.log method
}

//global scope example
var y = 10; //variable assigned outside functions and can be accessed by any function

function Add_Numbers_3() {
    document.write(20 + y + "<br>");
}

function Add_Numbers_4() {
    document.write(y + 100);
}
Add_Numbers_3();
Add_Numbers_4();

//Date().getHours() method example
function get_Date() {
    if (new Date().getHours()>18) { //18 (like military time) is 6pm
        document.getElementById("Greeting").innerHTML="Good evening!";
    }
}

//if statement
if (10 < 20) {
    document.write("The number on the left is smaller than number on the right.")
}

//else statement
function century_Function() {
    Age = document.getElementById("YearBorn").value;
    if (Age <= 1999) { //if birth year entered is less than 1999 (ex., 1973, 1986, 1952)
        Century = "You have lived in two centuries.";
    }
    else { //if birth year entered is not less than 1999 (ex, 2011, 2173)
        Century = "You have lived in one century.";
    }
    document.getElementById("Century").innerHTML = Century;
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}