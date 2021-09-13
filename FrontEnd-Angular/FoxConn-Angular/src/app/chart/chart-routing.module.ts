import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  { path: 'chart', redirectTo: 'chart/index', pathMatch: 'full'},
  
  { path: 'chart/index', component: IndexComponent },
  { path: '',
    redirectTo: '/employee/index',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
