import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
    MatDialogModule 
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  file: File | undefined;
  fileName: string = '';

  roleFormControl = new FormControl('');
  resumeFormControl = new FormControl('');
  resumeDisabled = true;
  resumeBoxClass = "choose-input";
  resumeFileClass = "disabled-file-name";
  textAreaClass = "textarea default-cursor"

  readonly dialog = inject(MatDialog);

  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true
    });
  }

  textResume() {
    this.resumeDisabled = false;
    this.resumeBoxClass = "choose-input-disabled";
    this.textAreaClass = "textarea";
  }

  fileResume() {
    this.resumeBoxClass = "choose-input-disabled";
    this.resumeFileClass = 'show-file-name';
  }

  closeFileUpload() {
    this.file = undefined;
    console.log('closeFile', this.file);
    this.resumeDisabled = true;
    this.resumeBoxClass = "choose-input";
    this.resumeFileClass = "disabled-file-name";
  }

  uploadFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
    if (this.file) {
      this.fileName = this.file.name;
      this.fileResume();
    }
  }
}
