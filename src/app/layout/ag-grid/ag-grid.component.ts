import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
  @Input() rowData: any = [];
  @Input() columnDefs: any = [];
  @Input() defaultColDef:any={}
  private gridApi:any;
  private gridColumnApi:any;


  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    this.gridApi.sizeColumnsToFit();
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    };
  }
}
