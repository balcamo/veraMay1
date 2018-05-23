import { Injectable } from '@angular/core';
import { CustomerService } from './api.service';
import { Customer } from '../vera/vera.customer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ReportServiceService {

  constructor(private customer: CustomerService) { }

}
