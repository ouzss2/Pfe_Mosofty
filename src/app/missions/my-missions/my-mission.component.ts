import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';
import { MissionControllerService } from 'src/app/mission/services';
import { companyDB } from 'src/app/shared/data/table/datatable';
@Component({
  selector: 'my-mission',
  templateUrl: './my-mission.component.html',
  styleUrls: ['./my-mission.component.scss']
})
export class MyMissionComponent implements OnInit {
  
  /**
   * 	private LocalDate endDate; 
	private LocalDate startDate;
	private BigDecimal tjm;
 
   */
 
  columns = [
    { prop: 'name',  name: 'Titre de mission'},
    { prop: 'companyName',  name: 'Société'},
    {  prop: 'tjm',name: 'T.J.M' },
    { prop: 'startDate',name: 'Date de démarrage' },
    { prop: 'startDate',name: 'Date de fin de mission' }
  ];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  public company = [];
  public missions = [];
  constructor(
    private missionService: MissionControllerService
  ) {
    this. initiateMissions();
  }

  

   
   
  ngOnInit(): void {

    
  }
   
   
  initiateMissions()
  {

  //  this.missions =   [{"endDate":"2022-11-30","startDate":"2022-11-26","tjm":500.00,"companyName":"KEFI"}];
   // this.missions =     companyDB.data;
     this.missionService.getAllMissions().subscribe(res =>{
      this.missions =  res;
    }); 
  }
   


}
