const student = {
    id: 101,
    name: {
        title: 'Md',
        first: 'Shakhawath',
        last: 'Hossain',
    },
    age: 32,
    subject: ['math', 'bangla', 'english'],
    email: 'shakhawath@gamil.com',
    study: function () {
        console.log(this.subject[1]);
    }
};

// problem 1.
// const lastName = student.name.last;
student.study();
// problem 2.
const mySattus = `
I am astudent, my fevarit subject is ${student.subject[0]}, my id: ${student.id}, my name: ${student.name.title} ${student.name.first} ${student.name.last}
`;
console.log(mySattus);