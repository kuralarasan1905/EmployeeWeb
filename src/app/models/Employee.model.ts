export class Employee{
    constructor(init?: Partial<Employee>){
        Object.assign(this, init)
    }
    public employeeId:number;
    public firstName:string;
    public lastName :string;
    public dateOfBirth :string;
    public departmentId:number;
    public departmentName: string;
    public location: string;
    public annualSalary:number;
}
