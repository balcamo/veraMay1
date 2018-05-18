import { Component, Inject, ElementRef, Input, OnDestroy  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldControl } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs'
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mailing = "none";
  outage = "none";
  pages = [
    { display: "Mailing", isChecked: false, value:this.mailing },
    { display: "Outage", isChecked: false, value: this.outage }
  ]
  title = 'app';
  constructor(private dialog: MatDialog) { }

  public openModal() {
    let dialogRef = this.dialog.open(OutageReportComponent, {
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


export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) { }
}


/** Custom `MatFormFieldControl` for telephone number input. */
@Component({
  selector: 'outage-report-dialog',
  templateUrl: './outage-report.html',
  providers: [{ provide: MatFormFieldControl, useExisting: OutageReportComponent }],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class OutageReportComponent implements MatFormFieldControl<MyTel>, OnDestroy {
  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef,
    public dialogRef: MatDialogRef<OutageReportComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = fb.group({
      'name': '',
      'typeOutage': '',
      'address': '',
      'circumstances': '',
      'area': '',
      'exchange': '',
      'subscriber': '',
    });
    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  static nextId = 0;
  form: FormGroup;
 

  stateChanges = new Subject<void>();

  focused = false;

  ngControl = null;

  errorState = false;

  controlType = 'my-tel-input';
  get empty() {
    let n = this.form.value;
    return !n.area && !n.exchange && !n.subscriber;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  id = `my-tel-input-${OutageReportComponent.nextId++}`;

  describedBy = '';

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
      + this.form.get('subscriber').value );
  }
}


/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'form-field-phone-number',
  template: `
    <mat-form-field>
      <outage-report-dialog placeholder="Phone number" required></outage-report-dialog>
      <mat-icon matSuffix>phone</mat-icon>
      <mat-hint>Include area code</mat-hint>
    </mat-form-field>
  `
})
export class FormFieldPhoneNumber { }

