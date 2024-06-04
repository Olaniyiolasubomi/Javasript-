alert
var student={
    'name': 'Victor',
    'age': 24,
    'course': 'Js'
}
console.log(`${student['name']} is ${student['age']} years old and is studying ${student['course']}`)
// the use of backtick is called TEMPLATE LITERAL

console.log(student.name, 'is',student.age, 'and is studying', student.course)
// the above is known as CONCATINATION-joining two things together

console.log(
    `${student['name']} is ${student['age']} years 
    old and is studying ${student['course']}`);