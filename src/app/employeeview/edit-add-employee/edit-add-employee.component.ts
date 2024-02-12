import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { AddOrUpdateEmployee } from 'src/app/models/AddOrUpdateEmployee.model';
import { SharedService } from 'src/app/shared.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-edit-add-employee',
  templateUrl: './edit-add-employee.component.html',
  styleUrls: ['./edit-add-employee.component.css']
})
 
export class EditAddEmployeeComponent implements OnInit {
  employeeId: number;
  employeeForm:FormGroup;
  employee: Employee;
  department: Department[];
  errorMessage: string;
  isError: boolean = false;

  constructor(private SharedService:SharedService,
              private route: Router,
              private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      dateOfBirth: new FormControl(),
      annualSalary: new FormControl(),
      department: new FormControl()
    });

    this.employeeId = this.activateRoute.snapshot.params['id'];

    if(this.employeeId == 0){      
     let employee = new Employee();
     employee.employeeId = 0;
     employee.firstName = '';
     employee.lastName = '';
     employee.dateOfBirth = '';
     employee.departmentName = '',
     employee.departmentId = 0,
     employee.location = '';
     employee.annualSalary = 0;

     this.employee = employee; 

     this.employeeForm.setValue({
       firstName: this.employee.firstName,
       lastName: this.employee.lastName,
       department: this.employee.departmentId,
       dateOfBirth: this.employee.dateOfBirth,
       annualSalary:this.employee.annualSalary
     });   
    }
    else{
      this.SharedService.GetIdEmployee(this.employeeId).subscribe( response => {
        this.employee = response;   

        this.employeeForm.setValue({
          firstName: this.employee.firstName,
          lastName:this.employee.lastName,
          department:this.employee.departmentId,
          dateOfBirth: this.employee.dateOfBirth,
          annualSalary:this.employee.annualSalary
        });  
      });
    }

    this.SharedService.getDepartmentlist().subscribe(response => {
      this.department = response;
    }); 
  }
  
  SaveData():void {
    let data = new AddOrUpdateEmployee();
    data.firstName = this.employeeForm.get("firstName")?.value;
    data.lastName=this.employeeForm.get("lastName")?.value;
    data.dob=this.employeeForm.get("dateOfBirth")?.value;
    data.departmentId=this.employeeForm.get("department")?.value;
    data.annualSalary=this.employeeForm.get("annualSalary")?.value;

    if(this.employeeId == 0){
      this.SharedService.addEmployee(data).subscribe(response =>{
        if (response.isSuccess) {
          this.route.navigate(['employeeview']);
          this.isError = false;
        }
        else{
          this.isError = true;
          this.errorMessage = response.errorMessage;
        }
      });
    }
    else{
      this.SharedService.UpdateEmployee(data, this.employeeId).subscribe(response => {
        if (response.isSuccess) {
          this.route.navigate(['employeeview']);
          this.isError = false;
        }
        else{
          this.isError = true;
          this.errorMessage = response.errorMessage;
        }
      });
    }    
  }
}