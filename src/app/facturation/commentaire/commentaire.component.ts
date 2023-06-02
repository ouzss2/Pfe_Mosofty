import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  isDraggedOver = false;
  uploadedFiles: File[] = [];
  containers: any[] = [
    { title: 'Container 1', name: 'John Doe' },
    { title: 'Container 2', name: 'Jane Smith' }
  ];


  constructor(private dialog: MatDialog) {}


  ngOnInit(): void {
  }

  isChecked: boolean = false;

  toggleSwitch() {
    this.isChecked = !this.isChecked;
  }
  onFileSelected(event: any) {
    this.isDraggedOver = false;
    const files: FileList = event.target.files;
    this.saveFiles(files);
  }

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    this.isDraggedOver = false;
    const files: FileList | null = event.dataTransfer?.files;
    if (files) {
      this.saveFiles(files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'copy'; // Set dropEffect to 'copy' to indicate a copy operation
    this.isDraggedOver = true;
  }
  

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDraggedOver = false;
  }

  saveFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
  }



  onDeleteImage(file: any) {
    const index = this.uploadedFiles.indexOf(file);
    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
    }
  }

 /* openImageModal(image: any) {
    this.dialog.open(ImageModalComponent, {
      data: { image },
    });
  }*/


  deleteContainer(container: any) {
    const index = this.containers.indexOf(container);
    if (index !== -1) {
      this.containers.splice(index, 1);
    }
  }

}