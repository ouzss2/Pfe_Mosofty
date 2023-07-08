import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from 'src/app/authentication/issigned.guard';
import { FactureComponent } from './facture/facture.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FactureComponent
            },
        ],
        canActivate: [
            //IsSignedInGuard
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactureRoutingModule { }
