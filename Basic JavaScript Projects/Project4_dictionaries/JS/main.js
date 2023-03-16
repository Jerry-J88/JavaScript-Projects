function Key() { //created function Key
    var Vehicle = { //set varible Vehicle and creaded a KVP
        Type: "Car",
        Make: "Subaru",
        Model: "Forrester",
        Color: "Black",
        Passengers: 5      
    };
    delete Vehicle.Model; //deleted on eof my KVPs
    document.getElementById("Dictionary").innerHTML = Vehicle.Model;
}