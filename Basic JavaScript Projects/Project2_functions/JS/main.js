function buttonClick() {  //function to excecute on the button click
    var colorChanger = document.getElementById("container").style.color //var assigned to turn text blue
    = "blue";
    
    var str = "Congrats! The text is now blue!"; //str to appear on the button click
    document.getElementById("Button_Text").innerHTML = str, colorChanger; //Telling the execute both var on click.

    var sentence = "What do you think it will do?"; //Sentence already in the <p> in HTML
    sentence += " It turned the text blue."; //Sentene that will be concacenated on button click.
    document.getElementById("anwser").innerHTML = sentence; //Telling var to execute on button click.
}