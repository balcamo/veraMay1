export class Customer {
  Name: string;
  Address: string;
  Number: string;
  Email: string;
  getName() {
    return this.Name;
  }
  setName(name: string) {
    this.Name = name;
  }
  getAddress() {
    return this.Address;
  }
  setAddress(address: string) {
    this.Address = address;
  }
  getNumber() {
    return this.Number;
  }
  setNumber(number: string) {
    this.Number = number;
  }
  getEmail() {
    return this.Email;
  }
  setEmail(email: string) {
    this.Email = email;
  }
}

export class CustomerList {
  customers: Customer[];

  setCustomers(customers: Customer[]) {
    this.customers = customers;
  }
  getCustomers() {
    return this.customers;
  }

}
