import delay from './delay';



const students = [
    {
        ID: '123',	
        StudentName: 'Johnny Depp',
        Grade: 'A-',
        Assignment_1: '92',
        Assignment_2: '90',
        Assignment_3: '90',
        Assignment_4: '88',
        Assignment_5: '88',
        Assignment_6: '100' 
    },
    {
        ID: '111',	
        StudentName: 'Billy Bob',
        Grade: 'B+',
        Assignment_1: '88',
        Assignment_2: '88',
        Assignment_3: '88',
        Assignment_4: '88',
        Assignment_5: '88',
        Assignment_6: '88' 
    },
    {
        ID: '222',	
        StudentName: 'Carlos Lopez',
        Grade: 'B+',
        Assignment_1: '88',
        Assignment_2: '88',
        Assignment_3: '88',
        Assignment_4: '88',
        Assignment_5: '88',
        Assignment_6: '88' 
    },
    {
        ID: '112',	
        StudentName: 'Travis Noah',
        Grade: 'B+',
        Assignment_1: '88',
        Assignment_2: '88',
        Assignment_3: '88',
        Assignment_4: '88',
        Assignment_5: '88',
        Assignment_6: '88' 
    },
    {
        ID: '001',	
        StudentName: 'Cameron Diaz',
        Grade: 'B-',
        Assignment_1: '80',
        Assignment_2: '80',
        Assignment_3: '80',
        Assignment_4: '80',
        Assignment_5: '80',
        Assignment_6: '80' 
    },
    {
        ID: '102',	
        StudentName: 'Keanu Reaves',
        Grade: 'B',
        Assignment_1: '84',
        Assignment_2: '84',
        Assignment_3: '84',
        Assignment_4: '84',
        Assignment_5: '84',
        Assignment_6: '84' 
    }
]


class StudentApi {
    static getAllStudents() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], students));
        }, delay);
      });
    }

    static saveAuthor(student) {
        student = Object.assign({}, student); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate server-side validation
            const minAuthorNameLength = 3;
            if (student.StudentName.length < minAuthorNameLength) {
              reject(`First Name must be at least ${minAuthorNameLength} characters.`);
            }
    
            resolve(student);
          }, delay);
        });
      }
    }
    
export default StudentApi;