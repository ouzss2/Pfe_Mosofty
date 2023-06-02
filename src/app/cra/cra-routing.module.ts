import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraComponent } from './cra.component';
 
 

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'create-activity',
        component: CraComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraRoutingModule { }