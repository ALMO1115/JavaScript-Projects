function displayType(character) {
    var characterType = character.getAttribute("data-character_type");
    alert(character.innerHTML + ": This quote is from the movie, " + characterType);
}