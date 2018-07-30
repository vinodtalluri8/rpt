import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MenuItem, SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { routerConstants } from '../../../core/constants/routerConstants';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { ReportService } from "../services/report.service";

@Component({
  selector: 'app-display-report-results',
  templateUrl: './display-report-results.component.html',
  styleUrls: ['./display-report-results.component.css']
})
export class DisplayReportResultsComponent implements OnInit {

  itemsPath: ({
    label: string; routerLink: string[];
  } | {
    label: string; routerLink ?: undefined;
  })[];
  displayRows: {
    label: string; value: number;
  }[];
  selectedRows: number;
  exportFileName: string;
  dialogHeader: string;
  evaluationReportlabelList;
  evaluationReportdatalist: any;
  isPaginator: boolean;
  filterable: boolean;
  value: string;
  msgs: Message[] = [];
  home: MenuItem;
  reportType;
  constructor(private location: Location, private activatedRoute: ActivatedRoute, private reportService: ReportService) {
    /** Initilase the breadcrumbs navigation data **/
    this.itemsPath = [
      { label: 'Checklists', routerLink: [routerConstants.defaultRoute] },
      { label: 'Reports', routerLink: ['/' + routerConstants.reports] },
      {label: 'Search results'}
    ];
      this.activatedRoute.queryParams.subscribe(params => {
        this.reportType = params['reportType'];
        console.log('report type',this.reportType);
    });
    this.home = { icon: 'fa fa-home' };
    this.displayRows = [{
        label: '15',
        value: 15
      },
      {
        label: '20',
        value: 20
      }, {
        label: '30',
        value: 30
      },
      {
        label: '50',
        value: 50
      }, {
        label: '100',
        value: 100
      }
    ];
    this.value = 'SYSTEM_VALUE';
    this.isPaginator = true;
    this.filterable = true;
    this.exportFileName = 'EvaluationReport';
    this.selectedRows = 15;
    this.dialogHeader = 'Add New Value';
    // this.evaluationReportlabelList = [{
    //     field: 'evaluation',
    //     header: 'Evaluation'
    //   },
    //   {
    //     field: 'frequency',
    //     header: 'Frequency'
    //   },
    //   {
    //     field: 'checklist',
    //     header: 'Checklist'
    //   },
    //   {
    //     field: 'department',
    //     header: 'Department'
    //   },
    //   {
    //     field: 'control',
    //     header: 'Control'
    //   },
    //   {
    //     field: 'controlLength',
    //     header: 'Control Length'
    //   },
    //   {
    //     field: 'reviewLength',
    //     header: 'Review Length'
    //   },
    //   {
    //     field: 'savings',
    //     header: 'Savings'
    //   }
    // ];
    this.evaluationReportdatalist = [{
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'AIM Currency Conversion',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'AIM Currency Conversion',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'AIM Currency Conversion',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'AIM Currency Conversion',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'AIM Currency Conversion',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      },
      {
        'evaluation': 'Candidate for Automation',
        'frequency': 'Ad Hoc',
        'checklist': 'Analytic Support Ad Hoc',
        'department': 'Information Management',
        'control': 'AIM Currency Conversion',
        'controlLength': '50',
        'reviewLength': '50',
        'savings': '12.00',
        'primary': 'AIM Currency Conversion',
        'title': 'AIM Currency Conversion',
        'controldescription': 'AIM Currency Conversion',
        'major':'AIM Currency Conversion',
        'minor':'AIM Currency Conversion'
      }
    ];
  }

  ngOnInit() {
    this.reportType = this.reportService.getReportType();
    console.log('report type......@@@@@@@@@@@@@',this.reportType);
    this.reportService.getReportData(this.reportType).subscribe( data =>{
      // this.evaluationReportlabelList = data.labelData;
      // this.evaluationReportdatalist = data.tableData;
    });
    // Controls without a procedure 
    if(this.reportType.checklistReport.code === 'NY'){
      this.evaluationReportlabelList = [
      {
        field: 'checklist',
        header: 'Checklist'
      },
      {
        field: 'control',
        header: 'Contorl'
      },
      {
        field: 'primary',
        header: 'Primary'
      },
    ];
    }else if(this.reportType.checklistReport.code === 'RM'){ //Evaluation Report
      this.evaluationReportlabelList = [{
        field: 'evaluation',
        header: 'Evaluation'
      },
      {
        field: 'frequency',
        header: 'Frequency'
      },
      {
        field: 'checklist',
        header: 'Checklist'
      },
      {
        field: 'department',
        header: 'Department'
      },
      {
        field: 'control',
        header: 'Control'
      },
      {
        field: 'controlLength',
        header: 'Control Length'
      },
      {
        field: 'reviewLength',
        header: 'Review Length'
      },
      {
        field: 'savings',
        header: 'Savings'
      }
    ];
    }else if(this.reportType.checklistReport.code === 'LDN'){ // procedure checklist
      this.evaluationReportlabelList = [{
        field: 'title',
        header: 'Title'
      },
      {
        field: 'checklist',
        header: 'Checklist'
      },
      {
        field: 'controldescription',
        header: 'Control description'
      }
    ];
    }else if(this.reportType.checklistReport.code === 'IST'){ //Procedures with 
      this.evaluationReportlabelList = [{
        field: 'title',
        header: 'Title'
      },
      {
        field: 'major',
        header: 'Major'
      },
      {
        field: 'minor',
        header: 'Minor'
      },
      {
        field: 'department',
        header: 'Department'
      }
    ];
    }else if(this.reportType.checklistReport.code === 'PRS'){ // Yearly Summary
      this.evaluationReportlabelList = [
      {
        field: 'checklist',
        header: 'Checklist'
      },
      {
        field: 'department',
        header: 'Department'
      },
       {
        field: 'frequency',
        header: 'Frequency'
      },
      {
        field: 'controlLength',
        header: 'Control Length'
      },
      {
        field: 'reviewLength',
        header: 'Review Length'
      }
    ];
    }else ;
  }
  back() {
    this.location.back();
  }
  checkAndEnablePage(value: number) {
    if (this.evaluationReportdatalist.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
  }
  pagination(isPaginator: boolean) {
    this.isPaginator = isPaginator;
  }

}
