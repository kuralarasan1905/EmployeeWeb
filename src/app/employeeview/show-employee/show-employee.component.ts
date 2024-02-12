import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { SharedService } from 'src/app/shared.service';
 
@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  constructor(private SharedService: SharedService,  
              private route: Router) {}
  
   employees:Employee[];
   errorMessage: string;
   isError: boolean = false;

  ngOnInit():void {
    this.SharedService.getEmployeelist().subscribe((data) => {
      this.employees = data;
    });
  } 
 
  EditEmployee(EmployeeId:number): void{
    this.route.navigate(['updateEmployee/'+ EmployeeId]);
    }

  onaddClicked(): void{
    this.route.navigate(['updateEmployee/0']);
    }
    
  deleteEmployee(EmployeeId: number) {
    this.SharedService.DeleteEmployee(EmployeeId).subscribe((data: any) => {
      if(data.isSuccess){
        this.isError = false;
        this.ngOnInit();
      }
      else{
        this.isError = true;
        this.errorMessage = data.errorMessage;
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





