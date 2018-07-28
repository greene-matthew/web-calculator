

function divide(numerator, denominator) {
   
    var numerator = new BigNumber(numerator);
    var denominator = new BigNumber(denominator);

    if (denominator != 0) {
        return parseFloat(a.div(b).toString()).toFixed(32);
    }
    else {
        alert("That operation is not permitted");
    }
}

console.log(divide(12.123456789123456789123412341234156789,5.123456789456789123465897134123419));