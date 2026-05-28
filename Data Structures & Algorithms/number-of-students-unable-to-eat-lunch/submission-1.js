class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        
        
        let i = 0;
        let rotations = 0;
        while(sandwiches.length != 0 && rotations < students.length){
            let studentChoice = students[0];
            let avSandwich = sandwiches[0];

            if(studentChoice === avSandwich){
                sandwiches.splice(0, 1);
                students.splice(0, 1);
                rotations = 0;
            } else {
                let sadStudent = students[0];
                students.splice(0, 1);
                students.push(sadStudent);
                rotations++;
            }
            

            // console.log('students', students);
            // console.log('sandwiches', sandwiches);
        }



        return students.length;
    }
}