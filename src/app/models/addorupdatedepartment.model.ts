export class AddorUpdateDepartment{
    constructor(init?: Partial<AddorUpdateDepartment>){
        Object.assign(this, init)
    }

    public departmentName: string;
    public location: string;
}

