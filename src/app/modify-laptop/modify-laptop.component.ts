import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { laptop} from "../shared/laptop"; // Adjust the import path accordingly

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  standalone: true
})
export class LaptopFormComponent implements OnInit {
  laptopForm: FormGroup;
  isEdit: boolean = false; // Flag to determine edit mode

  constructor(private fb: FormBuilder) {
    this.laptopForm = this.fb.group({
      id: [null, Validators.required],
      customerName: ['', Validators.required],
      company: ['', Validators.required],
      storage: ['', Validators.required],
      model: ['', Validators.required],
      emi: [false], // Default to false if not provided
    });
  }

  ngOnInit(): void {
    // Initialize form with existing laptop data if in edit mode
    if (this.isEdit) {
      // Fetch existing laptop data here and patch the form
      // this.laptopForm.patchValue(existingLaptopData);
    }
  }

  onSubmit(): void {
    if (this.laptopForm.valid) {
      const laptop: laptop = this.laptopForm.value;
      console.log('Laptop Submitted:', laptop);
      // Handle form submission logic (e.g., save to the server)
    }
  }
}
