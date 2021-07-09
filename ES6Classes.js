class Person {
  constructor (firstName, lastName){
     this.firstName = firstName; this.lastName = lastName;
  }
  
  greeting(){
    return `Hi,  ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    
    this.phone = phone;
    this.membership = membership;
  } 
  
  greetCustomer(){
    return `${super.greeting()} I'm ${this.firstName} ${this.lastName}`; 
  }
  
  static staticMethod(){
    return "Yo Yo bitch!";
  }
}

let customer = new Customer('John','Doe','12345','Premium');
console.log(customer.greetCustomer());
console.log(customer.greeting());console.log(Customer.staticMethod());
