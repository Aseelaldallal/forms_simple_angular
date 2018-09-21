import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signupForm : FormGroup;
  invalidName = 'test';

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, this.forbiddenNames),
      'email': new FormControl(null, Validators.email, this.forbiddenEmails)
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if(control.value === 'test') {
      return { 'nameIsForbidden' : true };
    }
    return null; 
  }

  forbiddenEmails(control: FormControl)  : Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if(control.value === 'test@gmail.com') {
          resolve({
            'emailIsForbidden': true
          })
        } else {
          resolve(null);
        }
      }, 3000);
    })
  }

}
