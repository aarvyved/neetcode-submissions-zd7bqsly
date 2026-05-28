class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let ptr
        for(let i = 0; i < sandwiches.length; ){
            let studentChoice = students[0];
            let avSandwich = sandwiches[i];
            
            if(studentChoice === avSandwich){
                // sandwiches.splice(0, 1);
                students.splice(0, 1);
                i++;
            } else {
                let sadStudent = students[0];
                students.splice(0, 1);
                students.push(sadStudent);
                
                if (!students.includes(avSandwich)) break;
            }
        }
        console.log('students', students);
        return students.length;
    }
}
