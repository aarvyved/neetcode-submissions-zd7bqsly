class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let sum = 0;
        for(const op of operations){

            if(op === "+"){
                const stackSum = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(stackSum);
                sum += stackSum;
            } else if(op === "D"){
                const double = stack[stack.length - 1] * 2;
                stack.push(double);
                sum += double;
            } else if(op === "C"){
                let top = stack.pop();
                sum -= top;
            } else {
                stack.push(parseInt(op));
                sum += parseInt(op);
            }
            console.log(stack);
        }

        return sum;
    }
}
