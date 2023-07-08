import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OcrService } from 'src/app/facturation/ocr.service';
import { ExperienceComponent } from '../experience/experience.component';
import { FormationComponent } from '../formation/formation.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maincv',
  templateUrl: './maincv.component.html',
  styleUrls: ['./maincv.component.scss']
})
export class MaincvComponent implements OnInit {





 

  constructor() {}

  ngOnInit() {

  }


}

