import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  EmployeeForm: any;  
  allEmployee!: Observable<Employee[]>;  
  posts: Employee[] = [];
  searchText: any;

  constructor( private Service:EmployeeService) { }
 

  ngOnInit() {
    this.loadAllEmployees();     
      
  }

  loadAllEmployees() {  
    this.allEmployee = this.Service.getEmployee();  
  } 

  checkAllCheckBox(ev: { target: { checked: string; }; }) {
		this.posts.forEach(x => x.active = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.posts.every(p => p.active);
	}

  deletePost(id:number){
    this.Service.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.employeeId !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}