import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'step-first',
  templateUrl: './step-first.component.html',
  styleUrls: ['./step-first.component.css'],
})
export class StepFirstComponent implements OnInit {
  personalInfo!: FormGroup;
  formGroups = [
    { label: 'name', placeholder: 'Murad Ahmadov' },
    { label: 'email', placeholder: 'mur1dehmedov@gmail.com' },
    { label: 'phone', placeholder: '+994 70 8783006' },
  ];

  constructor(private fb: FormBuilder, private dataService: DataService) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.personalInfo = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\+994 \d{2} \d{7}$/)],
      ],
    });
  }

  getErrorMessage(groupLabel: string) {
    if (this.personalInfo.controls[groupLabel].hasError('required')) {
      return 'This field is required';
    } else if (this.personalInfo.controls[groupLabel].hasError('email')) {
      return 'Please enter a valid email address';
    } else if (this.personalInfo.controls[groupLabel].hasError('pattern')) {
      return `Please enter a valid phone number (+994 70 8783006)`;
    } else {
      return '';
    }
  }

  isInvalid(groupLabel: string) {
    return (
      this.personalInfo.controls[groupLabel].invalid &&
      (this.personalInfo.controls[groupLabel].dirty ||
        this.personalInfo.controls[groupLabel].touched)
    );
  }

  onSubmit() {
    this.dataService.setUserInfo(this.personalInfo.value);
    console.log(this.personalInfo.value);
  }
}
