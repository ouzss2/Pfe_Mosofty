import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMissionComponent } from './creation/create-mission.component';
import { MyMissionComponent } from './my-missions/my-mission.component';
 

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'create',
        component: CreateMissionComponent
      },
      {
        path: 'create',
        component: CreateMissionComponent
      },      
      {
        path: 'mes-missions',
        component: MyMissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }