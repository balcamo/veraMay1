import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';


/* peices for material */
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
 } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';

/* the client pages */
import { AppComponent } from './app.component';
import { HomeComponent, AddFavDialogComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SafetyComponent } from './safety/safety.component';
import { MailingComponent } from './mailing/mailing.component';
import { CustomerService } from './services/api.service';
import { ReportServiceService } from './services/report-service.service';
import { OutageComponent } from './outage/outage.component';
import { CallReportComponent, FormFieldPhoneNumber } from './call-report/call-report.component';

@NgModule({
  entryComponents: [
    AddFavDialogComponent,
    HomeComponent,
    CallReportComponent,
    FormFieldPhoneNumber
    ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SafetyComponent,
    MailingComponent,
    OutageComponent,
    AddFavDialogComponent,
    FormFieldPhoneNumber,
    CallReportComponent,

  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
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
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,

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
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [CustomerService, ReportServiceService, FormFieldPhoneNumber],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
