import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink } from '@nebular/auth';
import { NbThemeService } from '@nebular/theme';
import { AuthBaseComponent } from '@shared';
import { InitUserService } from '../../../@theme/services/init-user.service';
import { getDeepFromObject } from '../../helpers';
import { EMAIL_PATTERN } from '../constants';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoginComponent extends AuthBaseComponent implements OnInit {
  minLength: number = this.getConfigValue('forms.validation.password.minLength');
  maxLength: number = this.getConfigValue('forms.validation.password.maxLength');
  redirectDelay: number = this.getConfigValue('forms.login.redirectDelay');
  showMessages: any = this.getConfigValue('forms.login.showMessages');
  strategy: string = this.getConfigValue('forms.login.strategy');
  socialLinks: Array<NbAuthSocialLink> = this.getConfigValue('forms.login.socialLinks');
  rememberMe = this.getConfigValue('forms.login.rememberMe');
  isEmailRequired: boolean = this.getConfigValue('forms.validation.email.required');
  isPasswordRequired: boolean = this.getConfigValue('forms.validation.password.required');

  errors: Array<string> = [];
  messages: Array<string> = [];
  user: any = {};
  submitted = false;
  loginForm: FormGroup;
  alive = true;

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected themeService: NbThemeService,
    private readonly fb: FormBuilder,
    protected router: Router,
    protected initUserService: InitUserService,
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    const emailValidators = [Validators.pattern(EMAIL_PATTERN)];
    this.isEmailRequired && emailValidators.push(Validators.required);

    const passwordValidators = [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)];
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.loginForm = this.fb.group({
      email: this.fb.control('', [...emailValidators]),
      password: this.fb.control('', [...passwordValidators]),
      rememberMe: this.fb.control(false),
    });
  }

  login(): void {
    this.user = this.loginForm.value;
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;

      if (result.isSuccess()) {
        this.messages = result.getMessages();
        this.initUserService.initCurrentUser().subscribe();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

  loginToDemonstrativeVersion(): void {
    localStorage.setItem('auth_app_refresh_token', '0oPhkJmr/Ubzi2cdhIXKiZtLeQv8eV18vwYTuXyiKIQ=');
    let app_token = {
      name: 'nb:auth:jwt:token',
      ownerStrategyName: 'email',
      createdAt: 1623236757718,
      value:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZmU1ZDdlNS04OTdhLTQ1YzQtOTQ3Yi0zYjA0YzY5YWI2OWYiLCJqdGkiOiIxNzFlNDM0My1lYjgyLTQ2ZGUtOTcwOS00YTgxZTRmYjJlNzIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzeXN0ZW1Ac3lzdGVtLmNvbSIsIkNtYXhDbGllbnRJZCI6IjIiLCJGaXJzdE5hbWUiOiJTeXN0ZW0gVXNlciIsIkxhc3ROYW1lIjoiIiwiQ29tcGFueU5hbWUiOiJXZWxsc0ZhcmdvIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3lzdGVtQWRtaW5pc3RyYXRvciIsImV4cCI6MTYyMzI5Njc1NywiaXNzIjoibG9jYWxob3N0OjUwMDEiLCJhdWQiOiJEZXZlbG9wZXJBdWRpZW5jZSJ9.fpi1ROERMfY3k_ObX8hELtiVZeoxtLNg6ZxFzkk7Kss',
    };
    localStorage.setItem('auth_app_token', JSON.stringify(app_token));

    this.router.navigate(['adminpanel/cms/faq']);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, undefined);
  }
}
