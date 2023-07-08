import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation/formation.component';
import { MaincvComponent } from './maincv/maincv.component';
import { CVRoutingModule } from './CV-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component';

import { MatDialogModule } from '@angular/material/dialog';
import { PopupnComponent } from './popupn/popupn.component';



@NgModule({
  declarations: [FormationComponent, MaincvComponent, ExperienceComponent, PopupnComponent],
  imports: [
    CommonModule,
    CVRoutingModule,
    ReactiveFormsModule,
    FormsModule
   ,MatDialogModule
  ]
})
export class GestionCvModule { }
