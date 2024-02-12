export class Department{
    constructor(init?: Partial<Department>){
        Object.assign(this, init)
    }

    public departmentId: number;
    public departmentName: string;
    public location: string;
}

