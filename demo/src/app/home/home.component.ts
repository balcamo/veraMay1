import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { LocalStorageService } from "angular-2-local-storage";
import { User } from '../vera/vera.employee';
import '../../theme.scss';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  favorites: any;
  modalVisibility = "none";
  about = "none";
  mailing = "none";
  outage = "none";
  safety = "none";
  public options = [
    { display: "about", isChecked: false, value: this.about , col:0 , row:0},
    { display: "mailing", isChecked: false, value: this.mailing, col: 0, row: 0 },
    { display: "outage", isChecked: false, value: this.outage, col: 0, row: 0 },
    { display: "safety", isChecked: false, value: this.safety, col: 0, row: 0 },
  ];

  constructor(private dialog: MatDialog, private localStorageService: LocalStorageService ) { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('currentUser'));
    if (this.favorites.length > 0) {
      this.options = this.favorites;
    }

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
      this.favorites = result;
      console.log(result);
      this.getSelected();
    });

  }
  private getSelected() {
    var i = 0;
    if (this.favorites != undefined) {
      for (i; i < this.favorites.length; i++) {
        if (this.options[i].isChecked) {
          this.options[i].value = "block"
          this.options[i].col = 3;
          this.options[i].row = 2;
        } else {
          this.options[i].value = "none"
          this.options[i].col = 0;
          this.options[i].row = 0;
        }
      }
      this.saveFavorites();
    }
  }

  private saveFavorites() {
    console.log('curent favs selected' + JSON.stringify(this.options));
    
    localStorage.setItem('currentUser', JSON.stringify(this.options));
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
