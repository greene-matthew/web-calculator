


function addition(num_1, num_2)
{
   
    var num_1 = new BigNumber(num_1);
    var num_2 = new BigNumber(num_2);

    return num_1.plus(num_2).toString();
}

console.log(addition("5151512214560230205","52556156160231561"));