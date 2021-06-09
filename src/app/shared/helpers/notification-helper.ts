import { NgModule } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@NgModule()
export class NotificationHelper {
  options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: undefined,
    showDuration: '600',
    hideDuration: '1000',
    timeOut: '10000',
    extendedTimeOut: '10000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };

  optionsCloseOnClick = {
    duration: 0,
  };

  constructor(private readonly toastrService: NbToastrService) {}

  public showError(title: string, message: string): void {
    this.toastrService.danger(message, title, this.optionsCloseOnClick);
  }

  public showSuccess(message: string, title = 'Success'): void {
    this.toastrService.success(message, title, this.options);
  }

  public showWarning(message: string, title = 'Warning'): void {
    this.toastrService.warning(message, title, this.optionsCloseOnClick);
  }
}
