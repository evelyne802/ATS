import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    FormsModule 
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  roleFormControl = new FormControl('');
  resumeFormControl = new FormControl('');
  resumeDisabled = true;
  resumeBoxClasses = "choose-input";

  removeButtons() {
    this.resumeDisabled = false;
    this.resumeBoxClasses = "choose-input-disabled";
  }
}
