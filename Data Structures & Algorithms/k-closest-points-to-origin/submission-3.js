class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        console.log('points', points);
        // let closest = Infinity;
        let distArr = [];
        let sortedArr = [];
        for(let i = 0; i < points.length; i++){
            let calc = points[i][0] ** 2 + points[i][1] ** 2;
            let distance = Math.sqrt(calc);

            distArr.push({point: points[i], d: distance});
        }

        distArr.sort((a, b) => a.d - b.d);
        for(let i = 0; i < distArr.length; i++) {
            sortedArr.push(distArr[i].point);
            // closest = Math.min(distance, closest)
        }

        // console.log('distArr', distArr);
        console.log('sortedArr', sortedArr);

        sortedArr.length = k;
        
        return sortedArr;

    }
}
