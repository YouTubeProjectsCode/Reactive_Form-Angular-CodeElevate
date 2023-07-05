import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  reactiveForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  submit() {
    console.log(this.reactiveForm.value);
  }
}
