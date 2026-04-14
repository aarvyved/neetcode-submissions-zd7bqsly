class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let res = [];
        let arrLen = arr.length - 1;
        
        let largest = 0;
        for(let i=arrLen; i>=0; i--){
            console.log(arr[i]);
            let currNum = arr[i];
            if(i === arrLen){
                arr[i] = -1;
            } else {
                arr[i] = largest;
            }
            largest = Math.max(largest, currNum);
        }
        return arr;
    }
}
