import { Rule } from "./rule";

export interface Employee {

    employeeId:number;
    ruleId:number;
    name:string;
    salary:number;
    gender:string;
    active:string;
    created_at:string;
    modified_at:string;
    rule:Rule;
    
}
