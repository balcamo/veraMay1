export interface Customer {
  name: string;
  address: string;
  number: string;
  email: string;
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
