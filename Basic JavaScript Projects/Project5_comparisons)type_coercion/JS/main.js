document.write(typeof 6); 

document.write("90" * 8);

document.write(0/0); 

document.write(isNaN("marriage") ); 

document.write(isNaN(242)); 

function Num() {
    var exponent = 2E+354;

    document.getElementById("infinity").innerHTML = exponent;
}


function Num_1() {
    var exponent = -1.68976E+6743;

    document.getElementById("Neg").innerHTML = exponent;
}

document.write(95 < 35); 

document.write(654 > 653); 

console.log(5 * 10);

console.log(5 > 20);

document.write(8 * 10 == 80);

document.write(8 * 10 == 800);

A = 03/23/1988;
B = 03/23/1988;
document.write(A === B);

C = 534;
D = "9432";
document.write(C === D);

E = 23;
F = "23";
document.write(E === F);

G = "Dog";
H = "Cat";
document.write(G === H);

document.write(9 < 32 && 5 * 2 > 2);

document.write(8 > 23 || 23 < 12);

function not_Function() {
   document.getElementById("Not").innerHTML = !(15 > 365);
}