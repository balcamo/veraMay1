import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Customer } from '../vera/vera.customer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


//const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  
  constructor(private http: Http) { }
  // API: GET /customers
  public getAllCustomers() {
    return this.http
      .get('/customers')
      .map(response => {
        const customers = response.json();
        return customers.map((customer) => new Customer());
      })

  }

  // API: POST /customers
  public createCustomer(customer: Customer) {
    // will use this.http.post()
  }

  // API: GET /customers/:id
  public getCustomerByName(customerName: string) {
    return this.http
      .get('/customers/' + customerName)
      .map(response => {
        return response.json();
      })  }

  // API: PUT /customers/:id
  public updateCustomer(customer: Customer) {
    // will use this.http.put()
  }

  // DELETE /customers/:id
  public deleteCustomerByName(customerName: string) {
    // will use this.http.delete()
  }

}
