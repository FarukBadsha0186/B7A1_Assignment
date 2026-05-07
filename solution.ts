//problem 1

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

// Sample Input:
const evenNumber = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumber); 


//problem2 
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}


const reversword = reverseString("typescript");
console.log(reversword); 



//problem 3
type StringOrNumber = string | number;


function isString(value: StringOrNumber): value is string {
    return typeof value === "string";
}

function isNumber(value: StringOrNumber): value is number {
    return typeof value === "number";
}


function checkType(value: StringOrNumber) {
    if (isString(value)) {
        return "String";
    }
    if (isNumber(value)) {
        return "Number";
    }
    return "Unknown";
}

console.log(checkType("Hello")); 
console.log(checkType(42));      


//problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
const propertyresult = getProperty(user, "name");


console.log(propertyresult); 



//problem 5


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}


const myBook: Book = { 
    title: "TypeScript Guide", 
    author: "Jane Doe", 
    publishedYear: 2024 
};

const results = toggleReadStatus(myBook);
console.log(results);







//problem 6 
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails(); 




//problem 7 
type Arrays = {
    array1: number[];
    array2: number[];
};

function getIntersection(arrays: Arrays): number[] {
    return arrays.array1.filter(item => arrays.array2.includes(item));
}


const result = getIntersection({
    array1: [1, 2, 3, 4, 5],
    array2: [3, 4, 5, 6, 7]
});
console.log(result); 





















