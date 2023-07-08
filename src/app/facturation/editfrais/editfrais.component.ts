import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-editfrais',
  templateUrl: './editfrais.component.html',
  styleUrls: ['./editfrais.component.scss']
})
export class EditfraisComponent implements OnInit {

  frais
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog, private service :OcrService) { }

  ngOnInit(): void {
    this.frais = this.service.getfrais();
  }


  save(): void {
    // Perform any necessary validation or processing before saving
    // Pass the updated item back to the parent component
    this.service.updatefrais(this.frais)
    this.dialog.closeAll();
  }


  cancel(): void {
    // Close the dialog without any changes
    this.dialog.closeAll();
    }

}
