import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { Rule } from 'src/app/model/rule';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { RuleService } from 'src/app/rule/rule.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  rules:[] = [];
  allRules!: Observable<Rule[]>; 
  
  constructor(
    public postService: EmployeeService,
    private router: Router,
    public Service: RuleService

  ) {  }
  
  ngOnInit(): void {
    
    this.loadAllRule();  

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      gender: new FormControl(),
      active: new FormControl(),
     // created_at: new FormControl('', [Validators.required]),
     // modified_at: new FormControl(''),
      ruleId: new FormControl(this.rules),     
    });    
  }

  loadAllRule() {  
    this.allRules = this.Service.getRules();  
  } 
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('employee/index');
    })
  }
 

}