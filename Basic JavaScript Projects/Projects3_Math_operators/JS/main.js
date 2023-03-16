function Addition() { //Naming function
    var result = 4 + 5 //setting varible result
    document.getElementById("Math").innerHTML = result; //calling function to perform and write anwser
}

function Subtraction() { //Naming function
    var Anwser = 1052 - 735
    document.getElementById("Sub").innerHTML = Anwser;
}

function Multiply() { //Naming function
    var simple_Math = 30 * 17
    document.getElementById("Mul").innerHTML = simple_Math;
}

function Division() {  //Naming function
    var simple_Math_2 = 35897 / 332
    document.getElementById("Div").innerHTML = simple_Math_2;
}

function solve_Math() {  //Naming function
    var hard = (45 + 23) * 36 - 78 / 4
    document.getElementById("Complex").innerHTML = hard;
}

function Modulus() {  //Naming function
    var Remain = 30 % 8
    document.getElementById("Mod").innerHTML = "When you divided 30 by 8 you get a remainder of "
    + Remain
}

function negation() {  //Naming function
    var unary = -45
    document.getElementById("Neg").innerHTML = unary;
}


  var x = 3; //setting varibale and then using operand to increase by one
  x++;
  document.write(x); 

  var y = 9; //setting cariable and using operand to decrease by one.
  y--;
  document.write(y);

  window.alert(Math.random() * 100); //calling for an alert to post a random number between 1 and 100

  function Square() {  //Naming function
    var root = Math.sqrt(86);
    document.getElementById("Sqr").innerHTML = root;
  }