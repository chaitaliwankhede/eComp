import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  dpts = [
    {value: 'Auto', viewValue: 'Auto'},
  ];
}
