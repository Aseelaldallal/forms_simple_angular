import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

     // static is important here so you don't have to instantiate your own class
     static forbiddenNames(control: FormControl): { [s: string]: boolean } {
          if (control.value === 'test') {
               return { 'nameIsForbidden': true };
          }
          return null;
     }


     
     static forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
          return new Promise((resolve, reject) => {
               setTimeout(() => {
                    if (control.value === 'test@gmail.com') {
                         resolve({
                              'emailIsForbidden': true
                         })
                    } else {
                         resolve(null);
                    }
               }, 3000);
          })
     }



