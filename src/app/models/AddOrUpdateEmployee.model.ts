export class AddOrUpdateEmployee{
    constructor(init?: Partial<AddOrUpdateEmployee>){
        Object.assign(this, init)
    }
    public firstName:string;
    public lastName :string;
    public dob :string;
    public departmentId:number;
    public annualSalary:number;
}

