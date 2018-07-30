import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportService {
  reportType;
  url = 'data/dropdown-mock.json';
  constructor(private httpClient: HttpClient) { }

  getReport() {
    return this.httpClient.get(this.url);
  }

  setReportType(data) {
    this.reportType = data;
  }

  getReportType() {
    return this.reportType;
  }

  getReportData(data){
    return this.httpClient.get(this.url,data);
  }

}
