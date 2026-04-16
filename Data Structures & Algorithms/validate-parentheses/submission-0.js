class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let braceMap = {
            "(": ")",
            "{": "}",
            "[": "]",
        }
        let bracesArr = s.split("");
        let stack = [];
        for(let i = 0; i < bracesArr.length; i++){
            let stackTop = stack[stack.length - 1];
            if(braceMap[stackTop] === bracesArr[i]){
                stack.pop();
            } else {
                stack.push(bracesArr[i]);
            }
        }
        return stack.length ? false : true
    }
    
}
