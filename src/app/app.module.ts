import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderSidebarComponent } from './layout/header-sidebar/header-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdvancedSearchComponent } from './layout/advanced-search/advanced-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AgGridComponent } from './layout/ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderSidebarComponent,
    AdvancedSearchComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
