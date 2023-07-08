import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupfacComponent } from '../popupfac/popupfac.component';
import { OcrService } from '../ocr.service';
import { ModelClass } from '../models/ModelClass';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})

export class FactureComponent implements OnInit {
  isButtonDisabled: boolean = true;

   lst =[]
  items
  itemsize
  user
  date
  model:ModelClass  = new ModelClass()
  comments: string[] = [];


  constructor(private dialog: MatDialog, private service :OcrService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.items = this.service.containers
    this.itemsize = this.items.length
    this.user = this.service.getUserData()
    this.date = new Date().toLocaleDateString()
    this.service.comments$.subscribe((commentsArray: string[]) => {
      this.comments = commentsArray;
    });

    this.service.getFactures() .then(response => {
      // Handle successful response
  
      this.service.validations.next(response)
    })
    .catch(error => {
      console.log(error);
      // Handle error
    })
    .finally(() => {
      // Code to execute after each data processing
    
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupfacComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.items = this.service.containers
      this.itemsize = this.items.length
    
    });


  }


  

  async saveData() {
 
    

    var data:FormData = new FormData()
    var elem = this.service.getContainer()
    console.log("Container"+elem)
    elem.forEach((facture) => {
      data.append('files',facture.dividerTitle)
    });

    
    this.service.saveimage(data)
            .then(response => {
              // Handle successful response
              this.lst = response;
           
            })
            .catch(error => {
              console.log(error);
              // Handle error
            })
            .finally(() => {
              // Code to execute after each data processing
           
                  this.service.processData( JSON.stringify(this.service.prepareTosend(this.lst)))
                        .then(response => {
                          // Handle successful response
                          console.log(response)
                        })
                        .catch(error => {
                          console.log(error);
                          // Handle error
                        })
                        .finally(() => {
                          // Code to execute after each data processing
                          this.service.ResetEverything()
                          this.ngOnInit()
                                
                        });
            });
  
  }


}


