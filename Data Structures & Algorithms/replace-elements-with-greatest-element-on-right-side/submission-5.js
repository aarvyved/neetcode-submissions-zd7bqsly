class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        
        let res = [];
        let ctr = 1;
        for(let i=0; i<arr.length; i++){
            let newArr = arr.slice(ctr);
            let sortedArr = newArr.sort((a, b) => a-b);
            let largestNum = sortedArr[sortedArr.length - 1];
    
            if(i === (arr.length -1)){
                arr[i] = -1;
            } else {
                arr[i] = largestNum;
            }
            

            ctr++;
        }
        return arr;
    }
}
