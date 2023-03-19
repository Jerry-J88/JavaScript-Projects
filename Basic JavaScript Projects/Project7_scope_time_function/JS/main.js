X = 21; // Setting variable X to equal 21 globally

function addition() { // funtion to add var X and Y.
    document.write(X + Y);
    console.log(addition());
}

function Local() { // setting var Y locally
    Y = 45;
    
}
addition();

function Hello() { //function to get time and post a greeting depending on the time
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Hello, Good Day!"
    }

    else {
        document.getElementById("Greeting").innerHTML = "Hello, Good Evening!"
    }
}

function like_Cats() { // function setting if else statment.
    Cats = document.getElementById("Yes_No").value; // Var get value from input
    if (Cats == "Yes") {
        Answer = "Yay! You are a cool person!";
    }
    else {
        Answer = "I'm sorry you are not a cool person.";
    }
    document.getElementById("Cats").innerHTML = Answer;
}

function Time_function() { //Time function adding else if statment to add an additional branch to the boolean
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}