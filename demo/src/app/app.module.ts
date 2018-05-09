import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* peices for material */
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
 } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';



/* the client pages */
import { AppComponent } from './app.component';
import { HomeComponent, AddFavDialogComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SafetyComponent } from './safety/safety.component';
import { MailingComponent } from './mailing/mailing.component';
import { ApiService } from './services/api.service';
import { ReportServiceService } from './services/report-service.service';
import { OutageComponent } from './outage/outage.component';

@NgModule({
  entryComponents: [
    AddFavDialogComponent,
    HomeComponent,
    ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SafetyComponent,
    MailingComponent,
    OutageComponent,
    AddFavDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    HttpModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
 

  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    HttpModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,

  ],
  providers: [ApiService, ReportServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
