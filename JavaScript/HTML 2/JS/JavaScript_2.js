//if a form field is empty, this alerts a message to prevent the form from being submitted
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["mname"].value;
    if (y == "") {
        alert("Middle name must be filled out");
        return false;
    }
    let z = document.forms["myForm"]["lname"].value;
    if (z == "") {
        alert("Last name must be filled out");
        return false;
    }
    let a = document.forms["myForm"]["email"].value;
    if (a == "") {
        alert("Email must be filled out");
        return false;
    }
    let b = document.forms["myForm"]["character"].value;
    if (b == "") {
        alert("You must vote for one candidate");
        return false;
    }
}