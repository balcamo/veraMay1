import { Component, OnInit } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { ApiService } from '../services/api.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
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
  statusCh: string = "none";
  serviceCh: string = "none";
  // radio inputs
  //serviceType = "both";
  //status = "active";
  public serviceType: string;
  public status: string;

  received = "none";

  // list of attribute options
  public checks = [
    { display: "Status", isChecked: false, value: this.status },
    { display: "Service", isChecked: false, value: this.serviceType  }
  ]
  public filters = [
    { display: "Status", value: this.status },
    { display: "Service", value: this.serviceType }
  ]

  



  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }


  public showSelected() {
    console.log("serviceType is currently " + this.serviceType);
    if (this.checks[0].isChecked) {
      this.statusCh = "block";
    } else {
      this.statusCh = "none";
    }
    if (this.checks[1].isChecked) {
      this.serviceCh = "block";
    } else {
      this.serviceCh = "none";
    }
  }
 
  public getReport() {
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
    let body = JSON.stringify(this.filters);
    console.log("[DEBUG] body:", body);
		// The post request which takes parameters of address, body, options
    this.http.get(API_URL + '/customers')
      .map((res) => res.json())
      .subscribe((data) => this.waitForHttp(data));
    this.received = "block";
  }

	private waitForHttp(data: any) {
  if (data !== undefined) {
    console.log("There is a report");
    this.report = JSON.stringify(data);
    this.report = this.report.replace(/{/g,"");
    this.report = this.report.replace(/]/g, "");
    this.report = this.report.replace(/\[/g, "");
    this.report = this.report.split("},");
    console.log("After reassignment:" + this.report);
  }
}
}

