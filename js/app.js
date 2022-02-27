const student = {
    id: 101,
    name: {
        title: 'Md',
        first: 'Shakhawath',
        last: 'Hossain',
    },
    age: 32,
    subject: ['math', 'bangla', 'english'],
    email: 'shakhawath@mail.com',
    study: function () {
        console.log(this.subject[1]);
    }
};

// problem 1.
// const lastName = student.name.last;
// student.study();
// problem 2.
const mySattus = `
I am astudent, my fevarit subject is ${student.subject[0]}, my id: ${student.id}, my name: ${student.name.title} ${student.name.first} ${student.name.last}
`;
// console.log(mySattus);
// problem 3.1
const myNum = () => 89;
// console.log(myNum());

// 3.2
const dividedBy7 = num => num / 7;
const result = dividedBy7(70);
// console.log(result);

// 3.3
const addAndDivide = (num1, num2) => (num1 + num2) / 2;
const resule2 = addAndDivide(17, 37);
// console.log(resule2);
// 3.4 
const addAndAdd = (num3, num4) => {
    const num1 = num3 + 7;
    const num2 = num4 + 7;
    const total = num1 + num2;
    return total;
};
const addBoth = addAndAdd(17, 91);
// console.log(addBoth);

// problens 4.
const myNums = [14, 77, 35, 49, 21, 56, 63, 84, 28];
const resul = myNums.map(num => num / 7);
console.log(resul);

// problem 6.
const { email } = student;
console.log(email);
const myNums2 = [14, 77, 35, 49, 21, 56, 63, 84, 28];
const [, second] = myNums2;
console.log(second);