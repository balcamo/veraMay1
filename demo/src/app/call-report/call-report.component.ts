import { Component, Inject, ElementRef, Input, OnDestroy,  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldControl, MatIconRegistry } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { CustomerList, Customer } from '../vera/vera.customer';
import { LocalStorageService } from "angular-2-local-storage";
import { CustomerService } from '../services/api.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Subject, Observable, } from 'rxjs';

export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) { }
}


/** Custom `MatFormFieldControl` for telephone number input. */
@Component({
  selector: 'call-report-dialog',
  templateUrl: './call-report.component.html',
  styleUrls: ['./call-report.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CallReportComponent }],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class CallReportComponent implements MatFormFieldControl<MyTel>, OnDestroy {
  outage = "none";
  serviceRequest = "none";
  http: Http;
  customerService: CustomerService;
  customerList: CustomerList;
  fb: FormBuilder;
  stateChanges = new Subject<void>();


  customerGroupOptions: Observable<CustomerList>;

  public options = [
    { display: "Outage", isChecked: false, value: this.outage },
    { display: "Service Request", isChecked: false, value: this.serviceRequest }
  ]
  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef, http: Http,
    private localStorageService: LocalStorageService, customerService: CustomerService,
    public dialogRef: MatDialogRef<CallReportComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.http = http;
    this.customerService = customerService;
    this.customerList = this.customerService.getCustomerList();
    if (this.customerList == null) {
      this.http.get('/api/CustomerList')
        .map((res) => res.json())
        //.subscribe((data) => console.log(data));
        .subscribe((data) => this.setCustomers(data));
    }
    console.log("the customerList in call-report " + this.customerList);
    this.form = fb.group({
      'name': '',
      'typeOutage': '',
      'address': '',
      'circumstances': '',
      'area': '',
      'exchange': '',
      'subscriber': '',
      'email': '',
      'request': '',
    });
    this.fb = fb;
    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  setCustomers(data: any) {
    if (data !== undefined) {
      console.log("There is a list of customers");
      this.customerList = data as CustomerList;
      //this.customerList = Object.setPrototypeOf(this.customerList, CustomerList.prototype);
      //this.customerList = Object.setPrototypeOf(this.customerList, Customer.prototype)
      console.log("After reassignment:" + JSON.stringify(this.customerList));
      this.customerService.setCustomerList(this.customerList);
    }
  }

  filterGroup(val: string): CustomerList {
    if (val) {
      /*return this.customerList
        .map(group => ({ name: group.name, address: group.address, number: group.number, email: group.email }))
        .filter(group => group.address.length > 0);*/
    }
    return this.customerList;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
  ngOnInit() {
    /*this.customerGroupOptions = this.customerListForm.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );*/
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  static nextId = 0;
  form: FormGroup;

  focused = false;

  ngControl = null;

  errorState = false;

  controlType = 'my-tel-input';
  public showSelected() {
    console.log("email is currently " + this.outage);
    if (this.options[0].isChecked) {
      this.outage = "block";
    } else {
      this.outage = "none";
    }
    if (this.options[1].isChecked) {
      this.serviceRequest = "block";
    } else {
      this.serviceRequest = "none";
    }
  }
  get empty() {
    let n = this.form.value;
    return !n.area && !n.exchange && !n.subscriber;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  id = `my-tel-input-${CallReportComponent.nextId++}`;

  describedBy = '';
  filterAddresses(value: string){

}
  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required() { return this._required; }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): MyTel | null {
    let n = this.form.value;
    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.form.setValue({ area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber });
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
  saveForm() {
    // TODO:: Make this a Rest call to submit the form to the database
    console.log("name " + this.form.get('name').value);
    console.log("address " + this.form.get('address').value);
    console.log("what happend " + this.form.get('circumstances').value);
    console.log("outage type " + this.form.get('typeOutage').value);
    console.log("phone number " + this.form.get('area').value
      + this.form.get('exchange').value
      + this.form.get('subscriber').value);
  }
}


/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'form-field-phone-number',
  template: `
    <mat-form-field>
      <call-report-dialog placeholder="Phone number" required></call-report-dialog>
      <mat-icon matSuffix>phone</mat-icon>
      <mat-hint>Include area code</mat-hint>
    </mat-form-field>
  `
})
export class FormFieldPhoneNumber { }
