import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExceptionParserHelper, NotificationHelper } from '@helpers';
import { FAQApi } from 'app/@core/backend/common/api/faq.api';
import { FAQ } from 'app/@core/interfaces/common/faq';
import { ConfirmationService } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-acms-faq',
  templateUrl: './acms-faq.component.html',
  styleUrls: ['./acms-faq.component.scss'],
})
export class ACmsFAQComponent implements OnInit {
  loading = true;

  faqForm = new FormGroup({
    id: new FormControl(''),
    questionId: new FormControl(''),
    title: new FormControl('', Validators.required),
    body: new FormControl(''),
    lang: new FormControl(''),
  });

  get c() {
    return this.faqForm.controls;
  }

  public FAQ_LIST_PL: Array<FAQ> = [];

  items = [{ header: 'Polski' }, { header: 'English' }];
  languageList = ['pl', 'en'];
  activeIndex = 0;
  displayDialog = false;

  constructor(
    protected injector: Injector,
    private readonly faqApi: FAQApi,
    private readonly notificationHelper: NotificationHelper,
    private readonly confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getFAQList().subscribe(() => {
      this.loading = false;
    });
  }

  handleChangeTab(e) {
    const index = e.index;

    // Jeśli przeszliśmy na język angielski i formularz jest invalid lub edytowany a nie zapisany
    if (index === 1 && (this.faqForm.invalid || this.faqForm.dirty)) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Nie zapisałeś zmian w języku Polskim, czy chcesz to zrobić?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.activeIndex = 0;
        },
        reject: () => {
          this.getFAQDataByQuestionIdAndLanguage(this.c.questionId.value, this.languageList[index]).subscribe();
        },
      });
    } else {
      this.getFAQDataByQuestionIdAndLanguage(this.c.questionId.value, this.languageList[index]).subscribe();
    }
  }

  onEdit(edittenFaq: FAQ) {
    this.activeIndex = edittenFaq.lang === 'pl' ? 0 : 1;
    this.getFAQDataByQuestionIdAndLanguage(edittenFaq.questionId, edittenFaq.lang).subscribe();
    this.displayDialog = true;
  }

  onDelete(questionId: number): void {
    this.faqApi
      .getFaqListByQuestionId(questionId)
      .pipe(
        take(1),
        tap((result: Array<FAQ>) => {
          if (result) {
            // usuwanie listy elementów
            result.forEach(elem => {
              this.faqApi.delete(elem).pipe(take(1)).subscribe();
            });
          }
          this.notificationHelper.showSuccess(`Usunięto pytanie FAQ o id:${questionId}`);
          this.faqForm.markAsPristine();
        }),
        catchError((error: any) => {
          const exceptionparsed = ExceptionParserHelper.parse(error);
          this.notificationHelper.showSuccess('Błąd usuwania pytania FAQ', exceptionparsed);

          return of(error);
        }),
        mergeMap(() => this.getFAQList())
      )
      .subscribe();
  }

  addFaq(): void {
    this.activeIndex = 0;
    this.faqForm.reset();
    const newQuestionId = this.FAQ_LIST_PL.length > 0 ? this.FAQ_LIST_PL[this.FAQ_LIST_PL.length - 1].questionId + 1 : 1;
    this.faqForm.patchValue({ questionId: newQuestionId, lang: this.languageList[0] });
    this.displayDialog = true;
  }

  updateFAQ(): void {
    const editedFAQ: FAQ = this.faqForm.getRawValue();

    const operationObservable$ = !!editedFAQ.id ? this.faqApi.update(editedFAQ) : this.faqApi.add(editedFAQ);

    operationObservable$
      .pipe(
        take(1),
        tap(() => {
          this.notificationHelper.showSuccess('Dodano / Zmodyfikowano FAQ');
          this.faqForm.markAsPristine();
        }),
        catchError((error: any) => {
          const exceptionparsed = ExceptionParserHelper.parse(error);
          this.notificationHelper.showSuccess('Błąd dodawania/edycji FAQ', exceptionparsed);

          return of(error);
        }),
        mergeMap(() => this.getFAQList())
      )
      .subscribe();
  }

  private getFAQList(): Observable<Array<FAQ>> {
    return this.faqApi.getFAQList().pipe(
      take(1),
      map(data => {
        data.forEach(element => {
          // Można też użyć biblioteki html-to-text
          // https://www.npmjs.com/package/html-to-text
          element.body = this.convertToPlain(element.body);
        });

        return data;
      }),
      tap((result: Array<FAQ>) => {
        if (result) {
          this.FAQ_LIST_PL = result;
        }
      }),
      catchError((error: any) => {
        console.warn(error);
        return of(error);
      })
    );
  }

  private getFAQDataByQuestionIdAndLanguage(questionId, lang): Observable<FAQ> {
    return this.faqApi.getFAQByQuestionIdAndLanguage(questionId, lang).pipe(
      take(1),
      tap((result: FAQ) => {
        if (result[0]) {
          this.faqForm.patchValue(result[0]);
          this.faqForm.markAsPristine();
        } else {
          // Czyli np przełączyliśmy się na ENG i nie ma obiektu,
          // to resetujemy i ustawiamy tylko questionId i lang
          this.faqForm.reset();
          this.faqForm.patchValue({ questionId, lang });
        }
      }),
      catchError((error: any) => {
        console.warn(error);
        return of(error);
      })
    );
  }

  private convertToPlain(html) {
    // Create a new div element
    const tempDivElement = document.createElement('div');

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || '';
  }
}
