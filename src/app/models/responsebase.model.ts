export class ResponseBase {
    constructor(data?: Partial<ResponseBase>){
        Object.assign(this, data);
    }

    public isSuccess: boolean;
    public successMessage: string;
    public errorMessage: string;
}
