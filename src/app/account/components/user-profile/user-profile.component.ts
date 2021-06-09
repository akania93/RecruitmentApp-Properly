import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExceptionParserHelper, NotificationHelper, ValidationHelperService } from '@helpers';
import { UserPanelBaseComponent } from '@shared';
import { UsersService } from 'app/@core/backend/common/services/users.service';
import { User } from 'app/@core/interfaces/common/users';
import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, mergeMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent extends UserPanelBaseComponent implements OnInit, OnDestroy {
  // W prawdziwym API nie będzie już potrzeby robić FormGroup: roles, name - przy json-server po prostu znika linijka w json jak tu nie ma.
  userForm = new FormGroup({
    id: new FormControl('', Validators.required),
    roles: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    name: new FormControl(''),
    type: new FormControl('', Validators.required),
    nip: new FormControl(''),
    pesel: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    zip: new FormControl(''),
    houseNo: new FormControl(''),
    apartmentNo: new FormControl(''),
    country: new FormControl(''),
    language: new FormControl(''),
    bic: new FormControl(''),
    bankAccount: new FormControl(''),
    picture: new FormControl(''),
  });

  get c() {
    return this.userForm.controls;
  }

  personTypes: Array<any> = [];
  private readonly unsubscrbe$ = new Subject();

  constructor(
    protected injector: Injector,
    private readonly usersService: UsersService,
    private readonly notificationHelper: NotificationHelper,
    private readonly validationHelper: ValidationHelperService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.translate
      .get('formFields.personType')
      .pipe(take(1))
      .subscribe(res => {
        this.personTypes = [
          { name: res.person, value: 'person' },
          { name: res.firm, value: 'firm' },
        ];
      });

    this.getCurrentUser().subscribe();

    // TODO: to tylko wypisywanie błędów, do usunięcia
    this.userForm.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val => {
      this.validationHelper.logFormValidationErrors(this.userForm);
    });
  }

  ngOnDestroy(): void {
    this.unsubscrbe$.next();
    this.unsubscrbe$.unsubscribe();
  }

  onSubmit() {
    this.updateUser().subscribe();
  }

  private getCurrentUser(): Observable<User> {
    return this.usersService.getCurrentUser().pipe(
      takeUntil(this.unsubscrbe$),
      tap(result => {
        if (result) {
          this.userForm.patchValue(result);
        } else {
          this.userForm.reset();
        }
      }),
      catchError((error: any) => {
        console.warn(error);

        return of(error);
      })
    );
  }

  private updateUser(): Observable<User> {
    const editedUser: User = this.userForm.getRawValue();
    editedUser.name = `${editedUser.firstName} ${editedUser.lastName}`; // TODO: to nie będzie potrzebne przy prawdziwym API

    return this.usersService.update(editedUser).pipe(
      take(1),
      tap(() => {
        this.notificationHelper.showSuccess(this.translate.instant('t_user-profile.toast.userUpdated'));
        this.userForm.markAsPristine();
      }),
      catchError((error: any) => {
        const exceptionparsed = ExceptionParserHelper.parse(error);
        this.notificationHelper.showSuccess(this.translate.instant('t_user-profile.toast.userUpdatedError'), exceptionparsed);

        return of(error);
      }),
      mergeMap(() => this.getCurrentUser())
    );
  }
}
