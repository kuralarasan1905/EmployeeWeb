import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';
import { EditAddDepartmentComponent } from './departmentview/edit-add-department/edit-add-department.component';
import { EditAddEmployeeComponent } from './employeeview/edit-add-employee/edit-add-employee.component';
const routes: Routes = [
  {path:'employeeview',component:EmployeeviewComponent},
  {path:'departmentview',component:DepartmentviewComponent},
  {path:'updatedepartment/:id',component:EditAddDepartmentComponent},
  {path:'updateEmployee/:id',component:EditAddEmployeeComponent}

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
