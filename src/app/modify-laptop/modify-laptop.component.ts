import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { laptop} from "../shared/laptop"; //

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  standalone: true
})
export class LaptopFormComponent implements OnInit {
  laptopForm: FormGroup;
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {
    this.laptopForm = this.fb.group({
      id: [null, Validators.required],
      customerName: ['', Validators.required],
      company: ['', Validators.required],
      storage: ['', Validators.required],
      model: ['', Validators.required],
      emi: [false],
    });
  }

  ngOnInit(): void {

    if (this.isEdit) {

    }
  }

  onSubmit(): void {
    if (this.laptopForm.valid) {
      const laptop: laptop = this.laptopForm.value;
      console.log('Laptop Submitted:', laptop);

    }
  }
}

export class ModifyLaptopComponent {
}
