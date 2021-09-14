import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { Rule } from 'src/app/model/rule';
import { EmployeeService } from '../employee.service';
import { RuleService } from 'src/app/rule/rule.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  post!: Employee;
    
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
  
  }
    
}