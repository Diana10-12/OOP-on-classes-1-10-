// 2.1
// class Employee {

// }

// 2.2
// class Employee {

// }
// let employee = new Employee ;
// console.log(employee);

// 3.1
// class Employee {
// }
// let employee = new Employee ;
// employee.name = 'Ivan';
// employee.age = '18';
// employee.salary = '50000';

// 3.2
// class Employee {
// }
// let employee = new Employee ;
// employee.name = 'Ivan';
// employee.age = '18';
// employee.salary = '50000';
// alert(employee.name);
// alert(employee.age);
// alert(employee.salary);

// 4.1
// class Employee {
// }
// let employee1 = new Employee;
// let employee2 = new Employee;
// employee1.name = 'Ivan';
// employee2.name = 'Petya';
// console.log(employee1.name);
// console.log(employee2.name);

// 4.2
// class Employee {
// }
// let employee1 = new Employee;
// let employee2 = new Employee;
// employee1.name = 'Ivan';
// employee1.salary = '50000';
// employee2.name = 'Petya';
// employee2.salary = '55000';
// console.log(employee1.name);
// console.log(employee2.name);
// console.log(employee1.salary);
// console.log(employee2.salary);

// 4.3
// class Employee {
// }
// let employee1 = new Employee;
// let employee2 = new Employee;
// employee1.name = 'Ivan';
// employee1.salary = 50000;
// employee2.name = 'Petya';
// employee2.salary = 55000;
// alert(employee1.salary + employee2.salary);

// 5.1
// class Employee {
// 	show() {
// 		return '+++';
// 	}
// }
// let employee = new Employee;
// console.log(employee.show());

// 6.1
// class Employee {
// 	show(name, salary) {
// 		return name + ' ' + salary;
// 	}
// }
// let employee = new Employee;
// console.log(employee.show('Ivan', '50000'));

// 7.1
// class Employee {
// }
// let employee = new Employee ;
// employee.name = 'Ivan';
// employee.salary = '50000';

// 7.2
// class Employee {
//     show() {
// 		console.log(this.name);
// 	}
// }
// let employee = new Employee ;
// employee.name = 'Ivan';
// employee.salary = '50000';
// employee.show();

// 7.3
// class Employee {
//     show() {
// 		console.log(this.salary);
// 	}
// }
// let employee = new Employee ;
// employee.name = 'Ivan';
// employee.salary = '50000';
// employee.show();

// 8.1
// class Student  {
// }
// let student  = new Student;
// student.name = 'Ivan';
// student.surn = 'Ivanov';

// 8.2
// class Student {
// 	show() {
// 		return this.cape(this.name) + ' ' + this.cape(this.surn);
// 	}
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let student  = new Student;
// student.name = 'ivan';
// student.surn = 'ivanov';
// console.log(student.show());

// 8.3
// class Student {
// 	show() {
// 		return this.cape(this.name) + ' ' + this.cape(this.surn);
// 	}
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1, -5)  ;
// 	}
// }
// let student  = new Student;
// student.name = 'ivan';
// student.surn = 'ivanov';
// console.log(student.show());

// 9.1
// class Student {
// name;
// surn;
// show() {
// return this.name;
// }
// }

// 9.2
// class Student  {
// 	name = 'Ivan';
// 	surn = 'Ivanov';
// 	show() {
// 		return this.name + ' ' + this.surn;
// 	}
// }
// let student = new Student ;
// console.log(student.show());

// 10.1
// class Employee {
// 	constructor() {
// 		console.log('+++');
// 	}
// }
// new Employee;

