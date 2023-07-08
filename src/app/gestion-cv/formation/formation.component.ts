import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PopupnComponent } from '../popupn/popupn.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {



  constructor() {}

  ngOnInit(): void {
  }
 

}
