import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { FactureRoutingModule } from './Facture-routing.module';
import { ListComponent } from './list/list.component';
import { CommentaireComponent } from './commentaire/commentaire.component';






@NgModule({
  declarations: [FactureComponent, ListComponent,CommentaireComponent],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FacturationModule { }
