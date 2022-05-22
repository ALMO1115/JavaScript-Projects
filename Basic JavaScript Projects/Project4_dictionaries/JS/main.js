function my_Family() { //creating my first dictionary
    var Middle = {
        EyeColor: "brown",
        HairColor: "brown",
        Age: 8,
        FavColor: "red",
        FavFood: "watermelon gum",
    }
// not sure if I can add more to this inside one function?
    var Oldest = {
        EyeColor: "blue",
        HairColor: "dirty blonde",
        Age: "two sticks",
        FavColor: "blue",
        FavFood: "pizza"
    }
    
    var Husband = {
        EyeColor: "blue",
        HairColor: "brown",
        Age: 36,
        FavColor: "blue",
        FavFood: "Mountain Dew"

    };
    delete Middle.Age; //using operator as a word to remove key "Age" from being available to be displayed in HTML
    document.getElementById("Middle").innerHTML = Middle.Age; //aquiring age of variable Middle
    document.getElementById("Oldest").innerHTML = Oldest.Age; //also aquiring age but of different variable, "Oldest"
}

function my_Pets() {
    var Sasha = {
        Species: "dog",
        Color: "tan",
        Breed: "cocker spaniel & cavalier",
        Age: 2,
        Name: "Sasha"
    };
    document.getElementById("Sasha").innerHTML = Sasha.Age;
}