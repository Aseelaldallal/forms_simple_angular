import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm : FormGroup;
  status = ['Stable', 'Critical', 'Finnished'];


  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [CustomValidators.forbiddenNames, Validators.required]), // make sure you bind to this here if needed
      'email': new FormControl(null, [Validators.required, Validators.email], CustomValidators.forbiddenEmails),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

 
}
