/*
    ------- For Each Character -------

    Performs the same operation on every character inside a text frame. 

    Parameters:
        * target - an InDesign object containing text, such as a TextFrame or Selection
        * fn - a function that is performed on each Character inside of the target
            * very time fn is called, it is provided 
                1) a single Character
                2) the Character's index (position) inside the target, where 0 is the index for the first Character in the list
    Returns:   
        * Array of mutated Characters

    Example Usage: 
        function increaseHorizontalScale(character, i) {
            character.horizontalScale = character.horizontalScale + (i * 5);
        }
        forEachCharacter(app.selection[0], increaseHorizontalScale);

*/

function forEachCharacter(target, fn) {
    try {
        var characters = target.characters !== undefined ? target.characters : target;

        for (var i = 0; i < characters.length; i++) {
            fn(characters[i], i);
        }

        return characters;
    } catch (err) { alert(err) }
}