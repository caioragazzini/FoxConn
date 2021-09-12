import { OnInit } from '@angular/core';
import { FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { Rule } from 'src/app/model/rule';
import { EmployeeService } from '../employee.service';
import { RuleService } from 'src/app/rule/rule.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  id!: number;
  post!: Employee;
  form!: FormGroup;
  categoriaFind!: Observable<Rule>; 
  allRules!: Observable<Rule[]>; 
  rules!:Rule;
 
  nrSelect: any;
  nractive:any;
  nrgender:any;
   
  
  constructor(
    public postService: EmployeeService,
    private router: Router,    
    private route: ActivatedRoute,
    public Service: RuleService
    
  ) { }
  

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.find(this.id).subscribe((data: Employee)=>{
      this.post = data;
       
     
    });   
    
    this.loadAllRules();
        
    this.form = new FormGroup({
      id:  new FormControl(),
    name: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    gender: new FormControl(),
    active: new FormControl(),
    created_at: new FormControl(),
    
    ruleId: new FormControl(this.rules),         
    });
  

  }
 
  loadAllRules() {  
    
    this.allRules = this.Service.getRules();  
  } 

  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('employeed/index');
    })
  }
   
}