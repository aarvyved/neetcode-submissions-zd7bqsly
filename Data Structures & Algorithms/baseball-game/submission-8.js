class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let sum = 0;
        let newArr = [];
        let tempArr = [...operations];
        // build the array
        for(let i=0; i < operations.length; i++){
            let char = operations[i];
            console.log('het', char);

            if(!isNaN(char)){
                newArr.push(parseInt(char));
            }
            if(char === "+"){
                let num = newArr[newArr.length - 1] + newArr[newArr.length - 2];
                newArr.push(num);
            }
            if(char === "D"){
                let num = newArr[newArr.length - 1] * 2;
                newArr.push(num);
            }
            if(char === "C"){
                newArr.pop();
            }
            console.log("i", i);
            console.log(newArr);
        }
        
        // calculate total of the array numbers
        return newArr.reduce((a, b) => a + b, 0);
        // return sum;
    }
}
