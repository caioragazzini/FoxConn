import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [

  { path: 'employee', redirectTo: 'employee/index', pathMatch: 'full'},
  
  { path: 'employee/index', component: IndexComponent },
  
  {
    path: 'employee/view/:id',
    component: ViewComponent,
    data: { title: 'Detalhe do Funcionário' }
  },
  {
    path: 'employee/create',
    component: CreateComponent,
    data: { title: 'Adicionar Funcionário' }
  },
  {
    path: 'employee/edit/:id',
    component: EditComponent,
    data: { title: 'Editar Funcionário' }
  },
  { path: '',
    redirectTo: '/employee/index',
    pathMatch: 'full'
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
