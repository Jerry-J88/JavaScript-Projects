function Call_Loop() { //setting Call loop function
    i = 0; //setting index at 0
    text = ""
    while (i < 11) { //while statment that while the index is less than 11 it will write what the current index is and then add one.
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

    var instruments = ["Trumpet", "Guitar", "Drums", "Sax", "Piano", "Bass"]; //variable array of instruments
    Content = "";
    var i; // set i as variable index

function for_Loop() { //loop that will go through array list and print the elements intil i is the at the same number as the array length
   for (i = 0; i < instruments.length; i++) {
    Content += instruments[i] + "<br>";
   }
   document.getElementById("List_of_Instruments").innerHTML = Content;

}

function array_Function() { //Another array variable written a different way
    var Turtles = [];
     Turtles[0] = "Leonardo";
     Turtles[1] = "Donatello";
     Turtles[2] = "Michaelangelo";
     Turtles[3] = "Raphael";
    document.getElementById("Array").innerHTML = "This is the coolest Ninja Turtle, "
    + Turtles[2] + ".";

}

const Top_Five_Movies = ["Back to the Future", " LOTR", " Star Wars", " Three Amigos", " The Holiday"]; //setting an array using the const keyword
function constant_Function() {
    Top_Five_Movies[2] = " The Batman" //changing index 2 from Star Wars to The Batman
    Top_Five_Movies[5] = " Nacho Libre" // adding a sixth movie in index 5
    document.getElementById("Constant").innerHTML = "These are my top five movies, " + Top_Five_Movies + ". Yes I know there are six."
}

{ let X = "What is your favorite movie?" //setting a variable using the let keyword
    document.write(X);
}

let video_game = { //object created using let keyword. Method is included to return sentence.
    Name: "Legend of Zelda",
    System: "Nintendo Entertainment System",
    Genre: "Action/Adventure",
    Multiplayer: "No",
    Explanation : function() {
        return "Does " + video_game.Name + ", have multiplayer? " + video_game.Multiplayer + ".";
    }
};
document.getElementById("Game").innerHTML = video_game.Explanation();