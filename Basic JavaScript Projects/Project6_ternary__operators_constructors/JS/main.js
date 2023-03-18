function Ride_Function() { //funstion that establishes two variables and then calls them to determine a boolean.
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

function Vehicle(Make, Model, Year, Color) { //Funstion that uses this. to set up future intances of that object
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White and Black");
var Erik =  new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; 
}

function Pet(Animal, Name, Age, Color) {
    this.Pet_Animal = Animal;
    this.Pet_Name = Name;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
}

var Jerry = new Pet("Cat", "Piccadilly", 8, "Tortie");

function newFunction() {
    document.getElementById("New_and_This").innerHTML = "Jerry has a " + Jerry.Pet_Animal + 
    " named " + Jerry.Pet_Name + ". She is a " + Jerry.Pet_Color;
}

function Add() { //Nested funtion setting a counter and then nested a function to increase the count by one when called.
    let counter = 0;
    function plus() {counter += 1;}
    plus();
    plus();
    document.getElementById("Nested_Function").innerHTML = "The counter is now at "
    + counter;
}