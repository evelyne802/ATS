import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    MatFormFieldModule, 
    MatInputModule,
    //BrowserAnimationsModule,
    ReactiveFormsModule, 
    FormsModule 
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
