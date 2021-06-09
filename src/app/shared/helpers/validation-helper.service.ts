import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationHelperService {
  public logFormValidationErrors(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const controlErrors: ValidationErrors = formGroup.get(key).errors;
      if (!!controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          const message = `${key}:   {${keyError}: ${controlErrors[keyError]}}`;
          console.log(message);
        });
      }
    });
    console.log(' ');
  }
}
