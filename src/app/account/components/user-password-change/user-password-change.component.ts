import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationHelperService } from '@helpers';
import { UserPanelBaseComponent } from '@shared';
import { CustomValidators } from 'ngx-custom-validators';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ngx-user-password-change',
  templateUrl: './user-password-change.component.html',
  styleUrls: ['./user-password-change.component.scss'],
})
export class UserPasswordChangeComponent extends UserPanelBaseComponent implements OnInit {
  showPassword = false;

  changePasswordForm = new FormGroup({
    old: new FormControl('', Validators.required),
    newPass: new FormControl('', Validators.required),
    newRepeat: new FormControl(''),
  });

  get c() {
    return this.changePasswordForm.controls;
  }

  constructor(protected injector: Injector, private readonly validationHelper: ValidationHelperService) {
    super(injector);
  }

  ngOnInit(): void {
    this.changePasswordForm.controls['newRepeat'].setValidators([Validators.required, CustomValidators.equalTo(this.c.newPass)]);

    this.changePasswordForm.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val => {
      this.validationHelper.logFormValidationErrors(this.changePasswordForm);
    });
  }

  onSubmit() {
    console.log(this.changePasswordForm.getRawValue());
    alert('Hasło zostało zmienione');
  }
}
