import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from 'src/app/authentication/issigned.guard';
import { MaincvComponent } from './maincv/maincv.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';




const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MaincvComponent
            },
            {
                path: 'formation',
                component: FormationComponent
            },
            {
                path: 'exp',
                component: ExperienceComponent
            },
        ],
        canActivate: [
           // IsSignedInGuard
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CVRoutingModule { }
