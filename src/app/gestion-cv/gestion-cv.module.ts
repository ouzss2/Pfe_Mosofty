import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation/formation.component';
import { MaincvComponent } from './maincv/maincv.component';
import { CVRoutingModule } from './CV-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormationComponent, MaincvComponent],
  imports: [
    CommonModule,
    CVRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionCvModule { }
