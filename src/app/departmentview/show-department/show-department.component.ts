import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit  {

  constructor(private SharedService: SharedService, private fb: FormBuilder, private route: Router) {
    
  }
  departmentList: Department[];
  errorMessage: string;
  isError: boolean = false;
 
  departmentformgroup: FormGroup;

  ngOnInit(): void {
    this.departmentformgroup = this.fb.group({

      departmentName: [""],
      location: [""]
    });
       this.SharedService.getDepartmentlist().subscribe(response => {
       this.departmentList = response;
    });

  }
  onEditClicked(departmentId:number): void{
  this.route.navigate(['updatedepartment'+ '/'+ departmentId]);
  }
  
  onaddClicked(): void{
    this.route.navigate(['updatedepartment/0']);
    }
  onDeleteClicked(DepartmentId: number): void {
    this.SharedService.DeleteDepartment(DepartmentId).subscribe(response => {
      if (response.isSuccess) {
        this.isError = false;
        this.ngOnInit();
      }
      else{
        this.isError = true;
        this.errorMessage = response.errorMessage;
      }
    });
  }  
  getBackGroundColor(i: number){
    if(i%2 == 0){
      return '#9CF9D7';
    }
    return '#F298F5';
  }
}


 // Onsubmit() {
  //   console.log(this.departmentformgroup.value);
  //   if (this.departmentformgroup.value.id != null && this.departmentformgroup.value.id !== "") {

  //   }
  //   else {
  //   }
  //   this.SharedService.addDepartment(this.departmentformgroup.value).subscribe(Response => {
  //     console.log(Response)
  //   });
  // }

  // onEditsClicked(data:any, id: number) {
  //   this.SharedService.UpdateDepartment(data, id).subscribe(response => {
  //     console.log(response)
  //     this.route.navigate(['departmentview']);

  //     this.departmentformgroup.setValue({
  //       departmentName: "",
  //       location: ""

  //     })
  //   })
  //   // this.departmentformgroup.setValue({
  //   //   departmentName: dep.departmentName,
  //   //   location: dep.location
  //   // })
  // }


