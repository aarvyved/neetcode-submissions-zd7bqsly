class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVal = 0;
        let i = 0;
        let j = heights.length - 1;
        
        while(i < j){
            const minVal = Math.min(heights[i], heights[j]);
            const area = (j-i) * minVal;
            if(area > maxVal){
                maxVal = area;
            }
            if(heights[i] < heights[j]){
                i++;
            } else {
                j--;
            }

        }
        return maxVal;
    }
}
