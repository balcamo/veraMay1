import { Component, OnInit, Inject, ElementRef, Input, OnDestroy  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldControl } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs'
import { MatIconRegistry } from '@angular/material';
import { CallReportComponent } from './call-report/call-report.component';
import { Customer, CustomerList } from './vera/vera.customer';
import { LocalStorageService } from "angular-2-local-storage";
import { CustomerService } from './services/api.service';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CustomerService],
})
export class AppComponent {
  http: Http;
  mailing = "none";
  outage = "none";
  customerList: Customer[];
  customerService: CustomerService;

  customerListForm: FormGroup = this.fb.group({
    customerList: '',
  });
  customerGroupOptions: Observable<Customer[]>;
  ngOnInit() {
    this.customerGroupOptions = this.customerListForm.get('customerList')!.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );
  }

  filterGroup(val: string): Customer[] {
    if (val) {
      return this.customerList
        .map(group => ({ name: group.name, address: group.address, number:group.number, email:group.email }))
        .filter(group => group.address.length > 0);
    }

    return this.customerList;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }

  pages = [
    { display: "Mailing", isChecked: false, value:this.mailing },
    { display: "Outage", isChecked: false, value: this.outage }
  ]
  title = 'app';
  constructor(private dialog: MatDialog, customerService: CustomerService, http: Http, private fb: FormBuilder,) {
    this.customerService = customerService;
    this.http = http;
    this.customerList = this.customerService.getCustomerList();
    if (this.customerList == null) {
      
      var pageHeaders = new Headers();
      pageHeaders.append('Content-Type', 'application/json');
      let options = new RequestOptions({

        headers: pageHeaders
      });
      this.http.get('/api/CustomerList')
        .map((res) => res.json())
        .subscribe((data) => console.log(data));
        //.subscribe((data) => this.setCustomers(data));
    }
    // add local storage if needed
  }
  setCustomers(data: any) {
    if (data !== undefined) {
      console.log("There is a list of customers");
      this.customerList = data as Customer[];
      this.customerList = Object.setPrototypeOf(this.customerList, CustomerList.prototype)
      console.log("After reassignment:" + this.customerList);
      this.customerService.setCustomerList(this.customerList);
    }
  }
  private catchError(error: Response) {
    var errorMes = "This shit is mucked";
    return Observable.throw(errorMes);
  }
 
  public openModal() {
    let dialogRef = this.dialog.open(CallReportComponent, {
      width: '75%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
  public showSelected() {
    console.log("mailing is currently " + this.mailing);
    if (this.pages[0].isChecked) {
      this.mailing = "block";
    } else {
      this.mailing = "none";
    }
    if (this.pages[1].isChecked) {
      this.outage = "block";
    } else {
      this.outage = "none";
    }
  }
}



