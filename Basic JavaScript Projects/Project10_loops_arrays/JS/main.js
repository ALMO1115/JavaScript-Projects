var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet"];
var Content = "";
var Y;
function for_Loop() {
    for(Y = 0; Y < Instruments.length; Y ++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var great_Jedi = []; //creating an array
    great_Jedi[0] = "Master Yoda"; //adding elements and values to array
    great_Jedi[1] = "Obi-Wan Kenobi";
    great_Jedi[2] = "Luke Skywalker";
    great_Jedi[3] = "Mace Windu";
    great_Jedi[4] = "Anakin Skywalker";
    document.getElementById("Array").innerHTML = "The greatest Jedi of all is " + great_Jedi[0] + ".";
}

//const keyword
function constant_function() {
    const Dogs = {breed: "Cocker & Cavalier mix", size: "small", color: "tawny"};
    Dogs.color = "tan"; //changing value of color
    document.getElementById("Constant").innerHTML = "The color of the " + Dogs.breed + " is " + Dogs.color + ".";
}

//let keyword
var x = 82;
document.write(x);
{
    let x = 33; //only accessible within brackets
    document.write("<br>" + x);
//  var x = 33; //if written this way then 33 would display in doc.write below because accessible outside brackets and reads most recent value of variable    
}
document.write("<br>" + x);

// return statement
document.getElementById("demo").innerHTML = myFunction("Fellow");

function myFunction(name) {
    return "Hello " + name;
}

//creating an object with the let keyword AND including properties and method
let shoe = {
    type: "tennis shoes", //property
    color: "white with blue stripes",  //property
    brand: "Adidas",  //property
    size: "6.5 in womens",  //property
    description: function() { //method
        return "My shoes are " + this.brand + " " + this.type + " in " + this.color + ", size " + this.size + ".";
    }
}
document.getElementById("Shoe_Object").innerHTML = shoe.description();

//creating a loop with a break statement (jumps out of a loop)
for (let A = 0; A<10; A++) {
    if (A===3) { break;} //this breaks/ends the loop when loop counter (A) is 3
    text += "The # is " + A + "<br>";
}
document.getElementById("break_Statement").innerHTML = text;

//creating continue statement inside a loop (jumps over one interation in a loop and continues w/ the next iteration of the loop)
for (let B=0; B<10; B++) {
    words += "The # is " + B + "<br>";
}
document.getElementById("continue_Statement").innerHTML = words;