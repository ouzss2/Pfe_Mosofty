import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  template: `
    <h4>Uploaded Image</h4>
    <img [src]="data.image.url" alt="Uploaded Image">
  `,
})
export class ImageModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
