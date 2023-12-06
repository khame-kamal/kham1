import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-programming-form',
  templateUrl: './programming-form.component.html',
  styleUrls: ['./programming-form.component.css']
})
export class ProgrammingFormComponent implements OnInit {
  programmingForm: FormGroup;
  experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.programmingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      programmingLanguages: this.fb.array([], Validators.required),
      experienceLevel: ['', Validators.required],
      projectDescription: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get name() { return this.programmingForm.get('name'); }
  get email() { return this.programmingForm.get('email'); }
  get programmingLanguages() { return this.programmingForm.get('programmingLanguages'); }
  get experienceLevel() { return this.programmingForm.get('experienceLevel'); }
  get projectDescription() { return this.programmingForm.get('projectDescription'); }

  onSubmit() {
    if (this.programmingForm.valid) {
      const name = this.programmingForm.value.name;
      const experience = this.programmingForm.value.experienceLevel;
      alert(Congratulations ${name}! Your programming skills are impressive. Keep up the great work!);
    } else {
      alert('Please fill in all required fields and correct any validation errors.');
    }
  }
}
