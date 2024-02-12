import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { ShowEmployeeComponent } from './employeeview/show-employee/show-employee.component';
import { EditAddEmployeeComponent } from './employeeview/edit-add-employee/edit-add-employee.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowDepartmentComponent } from './departmentview/show-department/show-department.component';
import { EditAddDepartmentComponent } from './departmentview/edit-add-department/edit-add-department.component';
import { SharedService } from './shared.service';

import {MatButtonModule} from '@angular/material/button';

//import { FormGroup,FormControl } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeviewComponent,
    ShowEmployeeComponent,
    EditAddEmployeeComponent,
    DepartmentviewComponent,
    ShowDepartmentComponent,
    EditAddDepartmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    //FormGroup,
    //FormControl
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
