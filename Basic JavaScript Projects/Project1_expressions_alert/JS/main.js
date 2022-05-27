document.write('Hello, World!')
var A = "This is a string";
var B = "Ugga Mugga";
document.write(A); //Displays text on screen
window.alert(B) //Results in an alert/pop-up window with text from variable B (which is Ugga Mugga)
document.write("Lyn said,\"Bean, I need 3\\4 cup sugar,\" to Rone."); //Practicing using the escape character
document.write("Dawson is 11th , " + "James is 8th, " + "Pamella is 2nd."); //Practicing concatenating
var C = "Hockey & " + "Football"
document.write(C)
document.write(A + B)
var D = A + C
document.write(D)

var Family = "The Millers", Dad = "John", Mom = "Lee", Son = "Dawson", Son2 = "James", Daughter = "Lyn";
document.write(Son2)
document.write(3+3)

function My_First_Function () { //Defining a function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML  = str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }