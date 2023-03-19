function Sentence() { //Function setting 3 variable strings which then uses concat() to put them together.

var sent_1 = "This is the ";
var sent_2 = "sentence that I ";
var sent_3 = "put together.";
var whole_sentence = sent_1.concat(sent_2, sent_3);
document.getElementById("Strings_Together").innerHTML = whole_sentence;

}

function slice_Method() {  //slice method to take out specific characters in the string.
    var sentence = "Click here to slice the sentence."
    var section = sentence.slice(14, 19) ;
    document.getElementById("Slice").innerHTML = section;
}

function Upper_Method() {  //function to turn all letter into uppercase.
    var Ex = "click to turn into uppercase.";
    var upper_Case = Ex.toUpperCase()
    document.getElementById("Uppercase").innerHTML = upper_Case;
}

function search_Method() { //using search() to find the position of an element in the string.
    var method = "What position is the word Kangaroo in?"
    var position = method.search("Kangaroo");
    document.getElementById("Search").innerHTML = position;
}

function string_Method() {  //using toString() to turn a number into a string data type
    var X = 5934;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

function precision_Method() { // precision to call a number to a specified position below calls the number to 24.245
    var Num = 24.2453234567;
    document.getElementById("Precision_number").innerHTML = Num.toPrecision(5);
}

function fixed_Method() { //turns a number into a string rounded to the specified decimal.
    var Beta = 584.5698421;
    var fix = Beta.toFixed(4);
    document.getElementById("Fixed_number").innerHTML = fix;
}

function Valueof_Method() { 
    var text = "Here is a string using value of."
    document.getElementById("Value").innerHTML = text.valueOf();
}