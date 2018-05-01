import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  tiles: any;
  total: number = 5;

  constructor() {
    
  }

ngOnInit() {
  this.tiles = [
    { text: 'safety', cols: 12 / this.total, rows: 12 / this.total, color: 'lightblue' },
    { text: 'about', cols: 12 / this.total, rows: 12 / this.total, color: 'lightgreen' },
    { text: 'mailing', cols: 12 / this.total, rows: 12 / this.total, color: 'lightgreen' },
  ];
  }

}
