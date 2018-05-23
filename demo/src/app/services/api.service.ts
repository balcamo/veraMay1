import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { CustomerList, Customer } from '../vera/vera.customer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


//const API_URL = environment.apiUrl;

@Injectable()
export class CustomerService {

  private customerListObj: CustomerList;
  private customerObj: Customer;

  public getCustomerList(): CustomerList {
    return this.customerListObj;
  }
  public setCustomerList(customerList: CustomerList) {
    this.customerListObj = customerList;
  }

  public getCustomer(): Customer {
    return this.customerObj;
  }
  public setCustomer(customer: Customer) {
    this.customerObj = customer
  }

}
