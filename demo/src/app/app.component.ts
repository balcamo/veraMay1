import { Component, OnInit, ViewChild, Inject, ElementRef, Input, OnDestroy  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldControl, MatIconRegistry } from "@angular/material";
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, Observable } from 'rxjs';
import { CallReportComponent } from './call-report/call-report.component';
import { Customer, CustomerList } from './vera/vera.customer';
import { LocalStorageService } from "angular-2-local-storage";
import { CustomerService } from './services/api.service';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CustomerService],
})
export class AppComponent implements OnInit{
  http: Http;
  mailing = "none";
  outage = "none";
  customerList: CustomerList;
  customerService: CustomerService;




  ngOnInit() {
    /*this.customerGroupOptions = this.customerListForm.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );*/
  }

  filterGroup(val: string): CustomerList {
    /*if (val) {
      return this.customerList
        .map(group => ({ name: group.name, address: group.address, number:group.number, email:group.email }))
        .filter(group => group.address.length > 0);
    }*/
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
    if (this.customerList == undefined) {
      this.http.get('/api/CustomerList')
        .map((res) => res.json())
        //.subscribe((data) => console.log(data));
        .subscribe(
          data => this.setCustomers(JSON.stringify(data)),
          err => this.catchError(err)
        );
    }
    // add local storage if needed
  }
  setCustomers(data: any) {
    if (data !== undefined) {
      console.log("There is a list of customers");
      var customer = data as string;
      
      //this.customerList = JSON.parse(data);
      //this.customerList = Object.assign(new CustomerList, data);
      //this.customerList.copyInto(data);
      console.log("After reassignment:" + this.customerList);
      console.log(typeof this.customerList);
      this.customerService.setCustomerList(this.customerList);
      customer = customer.replace(/{/g, "");
      customer = customer.replace(/]/g, "");
      customer = customer.replace(/\[/g, "");
      var customers = customer.split("},");
      console.log("After reassignment:" + customers);
    }
  }

  private catchError(error: Response) {
    var errorMes = "There is a problem";
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



