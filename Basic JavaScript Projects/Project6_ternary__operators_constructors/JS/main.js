//using ternary operator ? to determine if someone is tall enough to ride
function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//using ternary operator ? to determine if someone is old enough to vote
function Vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//creating an object constructor
function Vehicle(Make, Model, Year, Color) {
    //this is a keyword used in a function so, 
    //the value is the object possessing the function,
    //which is Vehicle_Make
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//new is a keyword used to create new objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//creating my own new and this keywords
//creating my own object constructor function
function Dog(Breed, Color, Size, Age) { //Dog is the object constructor
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Size = Size;
    this.Dog_Age = Age;
}
var Nicky = new Dog("Shih-Tzu", "Gray & White", "Medium", 1997);
var Mike = new Dog("Gordon Setter & Chihuahua", "Tri-Color", "Medium", 2003);
var Jack = new Dog("Yorki & Poodle", "Black", "Small", 2008);
var Penny = new Dog("Cocker Spaniel & Cavalier", "Tawny", "Medium", 2020);

function Dog_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "Jack is a " + Jack.Dog_Breed + " mix" + " with a " + Jack.Dog_Color + " coat.";
}

//trying to assign a variable the value of a reserved word
function Words() {
    var F, G;
    F = this;
    G = "yogurt";
    document.getElementById("reserved_word").innerHTML = F;
    document.getElementById("not_reserved_word").innerHTML = G;
}

//nested function
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} //this is the nested function
        Plus_one();
        return Starting_point;
    }
}