import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from '../chart.service';
import { salaryRule } from 'src/app/model/salaryRule';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allEmployee!: Observable<salaryRule[]>;  
  posts: salaryRule[]=[]; 

  constructor(private Service:ChartService) {

    this.Service.getChart().subscribe(data =>{
      this.posts=data;


    });
  }  

  ngOnInit(){ 
   
  }

}
