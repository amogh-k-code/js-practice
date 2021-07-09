function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getName = function() {
 // console.log(this);
  return `${this.firstName} ${this.lastName}`;
};

let person = new Person('John', 'Doe');

function Customer (firstName, lastName, phone, membership) {
  Person.call(this,firstName, lastName);
  
  this.phone = phone;
  this.membership = membership;
}

console.log(Customer.prototype);
console.log("Object.create(Person.prototype) : ");
console.log(Object.create(Person.prototype))
console.log(Customer.prototype);
Customer.prototype = Object.create(Person.prototype);
// console.log('----------------')
// console.log(Customer.prototype);

console.log("Customer after Object.create() : ");
console.log(Customer.prototype);
console.log("Customer prototype constructor ");
console.log(Customer.prototype.constructor);
Customer.prototype.constructor = Customer;
console.log('After Customer.prototype.constructor = Customer; ');
console.log(Customer.prototype);
console.log("Customer prototype constructor ");
console.log(Customer.prototype.constructor);

let customer1 = new Customer('Tom', 'Smith', '12345', 'Standard');
//console.log(customer1);
//console.log(customer1.getName());
Customer.prototype.getName = function() {
  return `${this.firstName} ${this.lastName} from Customer prototype`;
};
// console.log(customer1.getName());
// console.log("Person : ");
// console.log(person);
// console.log("Customer : ");
// console.log(customer1);