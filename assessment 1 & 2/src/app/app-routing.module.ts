import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'task',component:TaskComponent},
  {path:'task1',component:Task1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
