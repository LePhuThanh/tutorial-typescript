//lesson 37

class Person3 {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}


class Employee1 extends Person3 {
    private jobTitle;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string) {

        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overriding
    describe(): string {
        return `${super.describe()} from parent - describe anh Thanh dep trai`;
    }
}

// let employee = new Employee('John','Doe','Front-end Developer');

//Employee kết thừa lại person => dùng đc method của parent
let employee = new Employee1('Dep trai', 'Thanh', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());
