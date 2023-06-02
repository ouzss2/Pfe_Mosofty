import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from 'src/app/authentication/issigned.guard';
import { MaincvComponent } from './maincv/maincv.component';




const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MaincvComponent
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
