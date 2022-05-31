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