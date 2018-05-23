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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http: Http;
  mailing = "none";
  outage = "none";
  customerList: CustomerList = new CustomerList();
  customerService: CustomerService;
  pages = [
    { display: "Mailing", isChecked: false, value:this.mailing },
    { display: "Outage", isChecked: false, value: this.outage }
  ]
  title = 'app';
  constructor(private dialog: MatDialog, customerService: CustomerService, http: Http,) {
    this.customerService = customerService;
    this.http = http;
    this.customerList = this.customerService.getCustomerList();
    if (this.customerList == null) {
      this.http.get('/api/customerList')
        .map((res) => res.json())
        .catch(this.catchError)
        .subscribe((data) => this.setCustomers(data));
    }
    // add local storage if needed
  }
  setCustomers(data: any) {
    if (data !== undefined) {
      console.log("There is a list of customers");
      this.customerList = data as CustomerList;
      this.customerList = Object.setPrototypeOf(this.customerList, CustomerList.prototype)
      console.log("After reassignment:" + this.customerList);
      this.customerService.setCustomerList(this.customerList);
    }
  }
  private catchError(error: Response) {
    var errorMes = "This shit is mucked";
    return Observable.throw(errorMes);
  }
  ngOnInit() {

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



