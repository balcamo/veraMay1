import { Component, OnInit } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { ApiService } from '../services/api.service';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

//const API_URL = environment.apiUrl;
@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.scss'],
  providers: [ApiService]
})
export class MailingComponent implements OnInit {
  http: Http;
  public reportName: string;
  report: any;
  // visibility of checked items
  emailCh: string = "none";
  postalCh: string = "none";
  waterCh: string = "none";
  eletricCh: string = "none";
  // radio inputs
  //serviceType = "both";
  //status = "active";
  public email: string;
  public postal: string;
  public serviceType: string;
  public waterPropertyType: string;
  public eletricPropertyType: string;
  public residentType: string;
  received = "none";
  filter: any;

  // list of attribute options
  public checks = [
    { display: "Email", isChecked: false, value: this.email },
    { display: "Postal Mail", isChecked: false, value: this.postal  }
  ]

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() { }
  
  public showSelected() {
    console.log("email is currently " + this.email);
    if (this.checks[0].isChecked) {
      this.emailCh = "block";
      this.email = "getEmail";
    } else {
      this.emailCh = "none";
    }
    if (this.checks[1].isChecked) {
      this.postalCh = "block";
      this.postal = "getPostal";
    } else {
      this.postalCh = "none";
    }
  }
  public getServiceType(service: string) {
    if (service == "water") {
      this.waterCh = "block";
      this.eletricCh = "none";
    }
    if (service == "eletric") {
      this.eletricCh = "block";
      this.waterCh = "none";
    }
    if (service == "both") {
      this.waterCh = "block";
      this.eletricCh = "block";
    }
  }
 
  public getReport() {
    // TODO : make REST call
    console.log("get emial? " + this.email);
    console.log("get postal mailing list? " + this.postal);
    console.log("serviceType " + this.serviceType);
    console.log("waterPropertyType " + this.waterPropertyType);
    console.log("eletricPropertyType " + this.eletricPropertyType);
    console.log("residentType " + this.residentType);
    var uploadObj = { key: this.reportName };
    // Initialize parameters for URL
    let params: URLSearchParams = new URLSearchParams();
    // Saves key/value pairs to URL query string
    for (let key in uploadObj) {
      params.set(key, uploadObj[key]);
    }
    // Create the headers for the page
    var pageHeaders = new Headers();
    pageHeaders.append('Content-Type', 'application/json');
    // Places parameters in query string
    let options = new RequestOptions({
      search: params,
      headers: pageHeaders
    });
   /* var invocation = new XMLHttpRequest();
    var url = 'http://localhost:60083/api/Mailing';

      if (invocation) {
        invocation.open('GET', url, true);
        invocation.onreadystatechange = handler;
        invocation.send();
      }*/
    var body = {
      email: {
        serviceType: this.serviceType,
        waterPropertyType: this.waterPropertyType,
        eletricPropertyType: this.eletricPropertyType,
        residentType: this.residentType
      }, 
      postal: {
        serviceType: this.serviceType,
        waterPropertyType: this.waterPropertyType,
        eletricPropertyType: this.eletricPropertyType,
        residentType: this.residentType
        }
    };
    console.log("[DEBUG] body:", JSON.stringify(body));
		// The post request which takes parameters of address, body, options
    this.http.post('/api/Mailing', body)
      .map((res) => res.json())
      .subscribe((data) => console.log(data));
    //this.received = "block";
  }

	private waitForHttp(data: any) {
    if (data !== undefined) {
      this.report = data;
      console.log("There is a report");
      this.report = JSON.stringify(data);
      this.report = this.report.replace(/{/g,"");
      this.report = this.report.replace(/]/g, "");
      this.report = this.report.replace(/\[/g, "");
      this.report = this.report.split("},");
      console.log("After reassignment:" + this.report);
    }
      console.log(this.report);
  }
}

