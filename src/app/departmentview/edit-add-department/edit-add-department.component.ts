import { splitNsName } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AddorUpdateDepartment } from 'src/app/models/addorupdatedepartment.model';
import { SharedService } from 'src/app/shared.service';
import { Department } from 'src/app/models/department.model';

 
@Component({
  selector: 'app-edit-add-department',
  templateUrl: './edit-add-department.component.html',
  styleUrls: ['./edit-add-department.component.css']
})
export class EditAddDepartmentComponent implements OnInit{
  departmentId: number;
  departmentForm:FormGroup;
  department: Department;
  errorMessage: string;
  isError: boolean = false;
  constructor(private SharedService:SharedService,
              private route: Router, 
              private formBuilder: FormBuilder,
              private activateRoute: ActivatedRoute){}
   

  ngOnInit(): void {
    
    this.departmentForm = new FormGroup({
      departmentName: new FormControl(),
      location: new FormControl()
    });

    this.departmentId = this.activateRoute.snapshot.params['id'];
    if(this.departmentId == 0){      
     let department = new Department();
     department.departmentId = 0;
     department.departmentName = '';
     department.location = '';
     this.department = department; 
     this.departmentForm.setValue({
       departmentName: this.department.departmentName,
       location: this.department.location
     });  
    }
    else{
      this.SharedService.GetIdDepartment(this.departmentId).subscribe( response => {
        this.department = response;     
        this.departmentForm.setValue({
          departmentName: this.department.departmentName,
          location: this.department.location
        });  
      });
    }   
  }
  
  SaveData():void {
    let data = new AddorUpdateDepartment();
    data.departmentName = this.departmentForm.get("departmentName")?.value;
    data.location = this.departmentForm.get("location")?.value;

    if(this.departmentId == 0){
      this.SharedService.addDepartment(data).subscribe(response =>{
        if (response.isSuccess) {
          this.route.navigate(['departmentview']);
          this.isError = false;
        }
        else{
          this.errorMessage = response.errorMessage;
          this.isError = true;
        }
      });
    }
    else{
      this.SharedService.UpdateDepartment(data, this.departmentId).subscribe(response => {
        if (response.isSuccess) {
          this.route.navigate(['departmentview']);
          this.isError = false;
        }
        else{
          this.errorMessage = response.errorMessage;
          this.isError = true;
        }
      });
    }    
  }
}
