import { Component, OnInit } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.scss']
})
export class MailingComponent implements OnInit {
  http: Http;
  reportName: string;
  report: Array<any>;
  // visibility of checked items
  statusCh: string = "none";
  serviceCh: string = "none";
  // radio inputs
  //serviceType = "both";
  //status = "active";
  serviceType: string;
  status: string;
  // list of attribute options
  checks = [
    { name: "Status", isChecked: false, value: this.status },
    { name: "Service", isChecked: false, value: this.serviceType  }
  ]
  filters = [
    { name: "Status", value: this.status },
    { name: "Service", value: this.serviceType }
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
    //console.log("[DEBUG] body:", body);
		// The post request which takes parameters of address, body, options
    //this.http.post('/getreport', body, options)
     // .map((res) => res.json())
     // .subscribe((data) => this.waitForHttp(data));
  }

	private waitForHttp(data: Array<any>) {
  if (data !== undefined) {
    console.log("There is a report");
    this.report = data as Array<any>;
    console.log("After reassignment:" + this.report);
  }
}
}

