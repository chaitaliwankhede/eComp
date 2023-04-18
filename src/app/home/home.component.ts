
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import { HttpClient } from '@angular/common/http';
import { HttpSharedService } from '../common/http-interceptors/http-shared.service';
import { API } from '../common/constants/apiURL.constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private gridApi!: GridApi<any>;
  columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    initialWidth: 100,
    sortable: true,
    resizable: true,
    filter: true,
  };
  rowData: any = [];
  auditorData: any = {};

  constructor(private httpSharedService: HttpSharedService) { }

  ngOnInit(): void {
  
  }

  /*Grid ready event*/
  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
    this.getColumnDef();
  }


  /*update grid column defition anf rowdata */
  getColumnDef() {

      this.getAuditorsData().subscribe((res: any) => {
        this.auditorData = res;
        console.log('cw in getColumnDef', res)
      });
      setTimeout(() => {
    console.log("cw in getColumnDef data", this.auditorData, this.gridApi.getColumnDefs());
    let colDef: any[] = [] //this.gridApi.getColumnDefs();
    colDef.length = 0;
    const keys = Object.keys(this.auditorData.aaData[0])
    keys.forEach(key => colDef.push({ field: key, menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'], }));
    this.gridApi.setColumnDefs(colDef); //update column definition
    this.gridApi.setRowData(this.auditorData.aaData); // update rowdata
  }, 1000); 
  }


  getAuditorsData() {
    console.log("cw in getAuditorsData ", API.getAuditorData);
    // return  this.httpSharedJsonService.getAll(jsonUrl.getMyTask);
    return this.httpSharedService.getAll(API.getAuditorData);

  }
}