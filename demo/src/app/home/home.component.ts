import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  favorites: any;
  total: number = 0;
  
  modalVisibility = "none"
  about: string;
  home: string;
  mailing: string;
  outage: string;
  safety: string;
  public options = [
    { display: "about", isChecked: false, value: this.about },
    { display: "home", isChecked: false, value:this.home  },
    { display: "mailing", isChecked: false, value: this.mailing },
    { display: "outage", isChecked: false, value: this.outage },
    { display: "safety", isChecked: false, value: this.safety },
  ];

  constructor(private dialog: MatDialog) { }

ngOnInit() {
 
  }

  
  public addFavorite() {
    console.log("we clicked to add");

  }

  public openModal() {
    let dialogRef = this.dialog.open(AddFavDialogComponent, {
      width: '75%',
      data: this.options
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.options = result;
      console.log(result);
      this.getSelected();
    });

  }
  private getSelected() {
    var i = 0;
    for (i; i < this.options.length; i++) {
      if (this.options[i].isChecked) {
        this.favorites.push(this.options[i]);
        this.total = this.total + 1;
      }
    }
    if (this.total > 0) {
      console.log("total is more than 0");
      this.modalVisibility = "block"
    }
  }

}

@Component({
  selector: 'add-fav-dialog',
  templateUrl: './add-fav.component.html',
})
export class AddFavDialogComponent {
  favs: any;
 constructor(
   public dialogRef: MatDialogRef<AddFavDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {
   this.favs = data
 }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
