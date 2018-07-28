


function subtraction(num_1, num_2) {
   
    var num_1 = new BigNumber(num_1);
    var num_2 = new BigNumber(num_2);
    if(num_1 >= 0 && num_2 >= 0){
        
       
        var result = new BigNumber(num_1.minus(num_2));
        if(result < 0)
           alert("error");
        else
            return result.toString();
        }
}
console.log(subtraction("3","1000000"));
