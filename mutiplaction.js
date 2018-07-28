var BigNumber = require('bignumber.js');

function multiply(x,y)
{
    
    var a = new BigNumber(x);
    var b = new BigNumber(y);
    if(a == 0 || b == 0)
    {
        return "0";
    }
    
    if(a < 0 || b < 0)
    {
        console.log("Cant work with negative numbers");
    }
    
    var product=(a.times(b));
    
    if(product >-1 && product < 1)
    {
        if(product.toString().length > 20)
        {
            return product.toFixed(20).toString();
        }
        else
        {
            return product.toString();
        }
    }

    if(product.toString().length > 20)
    {
        return product.toExponential(9).toString();
    }

    return product.toString();

}



console.log(multiply("2","9"));
console.log(multiply("-1","4210941248"));
console.log(multiply("2","43"));
console.log(multiply("0.4217847124798127512942141248","1"));
console.log(multiply("24145215326263146134","482195583297152"));
console.log(multiply("41234324","2.42e-2"));
console.log(multiply("0.7","0.1"));
console.log(multiply("1","2"));
