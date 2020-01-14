import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LinkerComponent } from './linker/linker.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent},
  { path: 'addemployee', component: AddEmployeeComponent},
  { path: 'linker', component: LinkerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
