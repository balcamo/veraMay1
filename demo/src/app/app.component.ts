import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}

@Component({
  selector: 'outage-report-dialog',
  templateUrl: './outage-report.html',
})
export class OutageReportComponent {
  typeOutage: string;
  constructor(
    public dialogRef: MatDialogRef<OutageReportComponent>,
    @Inject(MAT_DIALOG_DATA)) {
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

