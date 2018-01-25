const piggyBank = [ 
                  ["pennies", 342],
                  ["nickels", 394],
                  ["dimes", 452],
                  ["quarters", 265]
 
];


let dollarAmount = 0;

for (var i = 0; i < piggyBank.length; i += 1) {
    var coins = piggyBank[i][0];
    var num = piggyBank[i][1];
    var penny = num/100;
    var dime = num/10;
    var nickel = num/20;
    var quarter = num/4; 

    if (coins == "pennies") {
        dollarAmount += penny;
        console.log("penny", "$" + penny);
    } else if (coins == "dimes") {
        dollarAmount += dime;
        console.log("dime", dime);
    } else if (coins == "nickels") {
        dollarAmount += nickel;
        console.log("nickel", nickel);
    } else if (coins == "quarters") {
        dollarAmount += quarter;
        console.log("quarter", quarter);
    }
}

    console.log(dollarAmount);
    // document.getElementById("coin").innerHTML = dollarAmount;