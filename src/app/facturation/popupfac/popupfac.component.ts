import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OcrService } from '../ocr.service';
import { FactureClass } from '../FactureClass';
import { ToastrService } from 'ngx-toastr';

import { Image } from '../models/Image';


@Component({
  selector: 'app-popupfac',
  templateUrl: './popupfac.component.html',
  styleUrls: ['./popupfac.component.scss']
})
export class PopupfacComponent implements OnInit {
  selectedImage: File;
  form: FormGroup;
  showProgress
  options = [
    { value: 'Transport', label: 'Transport' },
    { value: 'Restaurant', label: 'Restaurant' },
    { value: 'Other...', label: 'Other...' }
  ];
  animationPath: string = './assets/images/lottie/load.json'; // Replace with the path to your Lottie animation file

  user
  bytes
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog,private service:OcrService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: [''], // or use null as initial value
      option: [''] // or use null as initial value
    });
    this.user = this.service.getUserData()
    this.showProgress = this.service.showProgress
   
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.selectedImage = file;
  }

  close() {
    const formData = this.form.value;
     this.dialog.closeAll()
  
  }
  save() {
    const file: File = this.selectedImage;
    if (!file) {
      return;
    }
  
    this.service.setfile(file);

    this.showProgress = true;

    this.service.processImage(file)
      .then(response => {
        console.log("Pre Processs")
        
        this.service.saveImages(response)
        
        const factureInstance = this.createFactureInstance(response);
        this.service.fillthelist(factureInstance);
        this.showProgress = false;
        
      })
      .catch(error => {
        this.showProgress = false;
      
        this.toastr.error(error.error);
      })
      .finally(() => {
        this.dialog.closeAll();
      });
  }



  
  createFactureInstance(response: any): FactureClass {
    var factureInstance = new FactureClass();
    factureInstance.id = this.service.generateRandomId(5);
    factureInstance.title = this.form.get('option').value;
    factureInstance.date = new Date().toLocaleDateString();
    factureInstance.dividerTitle = this.selectedImage;
    factureInstance.dividerText = this.user.ufunction;
  
    const tvaItem = response.find(item => item.name === 'tva');
    const totalHtItem = response.find(item => item.name === 'totalht');
    const totalItem = response.find(item => item.name === 'total');
    const htItem = response.find(item => item.name === 'ht');
    
    factureInstance.tva = tvaItem ? tvaItem.value : 0;
    factureInstance.price = totalItem ? totalItem.value : 0;
    factureInstance.ht = totalHtItem ? totalHtItem.value: 0;

    this.service.saveDataToMongo(this.selectedImage,new Image(factureInstance.id ,"total", factureInstance.price),new Image( factureInstance.id ,"tva", factureInstance.tva),
    new Image(factureInstance.id ,"totalht", factureInstance.ht))
    factureInstance.list = this.service.getima()
   
 
    return factureInstance;
  }



  
}
