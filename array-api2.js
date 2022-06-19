// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    
    const result = fruits.join(',');
    console.log ('Q1: ', result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result2 = fruits.split('', 2);
    console.log('Q2: ',result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result3 = array.reverse();
    console.log('Q3: ',result3);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result4 = array.slice(2, array.length);
    console.log('Q4: ', result4);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    console.log(students);

    const result = students.find( function(student){  
        let score = student.score
        // console.log('Score is: ',score);
        if (score === 90) {
            console.log('Q5: Student with the score 90 is: ', student.name);
        }    
      });   
      
    let result2 = students.find(student => student.score === 45);
    console.log('result2: ', result2)
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter(student => student.enrolled);
    console.log('Q6: ', result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map(student => student.score);
    console.log('Q7: ', result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
    console.log('Q8: ', result);

    const result2 = !students.every((person) => person.score > 50);
    console.log('Q8 result2: ', result2);
  }
  
  // Q9. compute students' average score
  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }