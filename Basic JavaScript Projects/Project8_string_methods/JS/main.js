//concat method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "a red ";
    var part_3 = "rubber ball.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

//slice method
function slice_Method() {
    var Sentence = "Aloha, bonjour, salve, konnichiwa, guten tag";
    var Section = Sentence.slice (2, 19);
    document.getElementById("Slice").innerHTML = Section;
}

//string upper case method
let text = "Howdy all"
let result = text.toUpperCase();
document.getElementById("demo").innerHTML = result;

//string search method
let words = "A horse of course"
let position = words.search("course"); //returns the position of the word "course"
document.getElementById("demo2").innerHTML = position;

//string method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

//precision method
function precision_Method() {
    var Y = 459.9331852982
    document.getElementById("Precision").innerHTML = Y.toPrecision(7);
}

//fixed method
let num = 5.56789;
let n = num.toFixed();
document.getElementById("demo3").innerHTML = n;

//value of method
let stuff = "Hello world";
let results = stuff.valueOf();
document.getElementById("demo4").innerHTML = results;