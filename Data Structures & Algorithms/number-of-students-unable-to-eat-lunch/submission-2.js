class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let freq = {};
        for(const s of students){
            if(!freq[s]){
                freq[s] = 0
            }
            freq[s] += 1;
        }
        console.log(freq)

        let res = students.length;
        for(const sa of sandwiches){
            if(freq[sa] > 0){
                res -= 1;
                freq[sa] -= 1;
            } else {
                break;
            }
            
        }

        return res;
    }
}
