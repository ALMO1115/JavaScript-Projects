function Sanrio_Function() { //switch statement
    var Sanrio_Output;
    var Sanrio = document.getElementById("Sanrio_Input").value;
    var Sanrio_String = " is a fun choice!";
    var Sanrio_String2 = " is a classic choice!";
    var Sanrio_String3 = " is always a good choice!";
    var Sanrio_String4 = " is my favorite too!";
    switch(Sanrio){
        case "Hello Kitty":
            Sanrio_Output = "Hello Kitty" + Sanrio_String3;
            break;
        case "Keroppi":
            Sanrio_Output = "Keroppi" + Sanrio_String;
            break; 
        case "Badtz Maru":
            Sanrio_Output = "Badtz Maru" + Sanrio_String4;
            break;  
        case "Little Twin Stars":
            Sanrio_Output = "Little Twin Stars" + Sanrio_String;
            break;
        case "Pochacco":
            Sanrio_Output = "Pochacco" + Sanrio_String2;
            break;
            default:
                Sanrio_Output = "Please enter the character's name exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Sanrio_Output;
}

//getElementbyClassName method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//using JavaScript along with <canvas> element in HTML for more graphics
window.onload = function() { //adding an image
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("sanrio");
    ctx.drawImage(img, 10, 10, 250, 250); //last 2 #s are size of image inside canvas - not sure what 1st 2 #s are?s

//Canvas 3 needs to use different variable name from Canvas 1 to reference it, and need to have the code inside the same function as the other canvas or can tie it to a button to have it created when you click that button instead of when the page loads
//creating a gradient background inside of a canvas element
var e = document.getElementById("myCanvas3");
//had to change ctx to etx to help with errors i was having
var etx = e.getContext("2d");

var grd = etx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

etx.fillStyle = grd;
etx.fillRect(20, 20, 150, 100);
    }; //and moved this from where i originall had it right after ctx.drawImage above per instructors response


//window.onload = function() {
//    var c = document.getElementById("myCanvas2"); //fills canvas container with color
//    var ctx = c.getContext("2d");
//    ctx.fillStyle = "#FF0000";
//    ctx.fillRect(20, 20, 150, 100);
//}