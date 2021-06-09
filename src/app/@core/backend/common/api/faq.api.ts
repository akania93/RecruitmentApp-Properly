import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { handleErrorHelper } from 'app/@core/helpers/error-handler';
import { FAQ, FAQData } from 'app/@core/interfaces/common/faq';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FAQApi extends FAQData {
  private readonly path_faq: string = `${environment.API_BASE_URL}/faq`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getFAQList(): Observable<Array<FAQ>> {
    return this.http.get<Array<FAQ>>(`${this.path_faq}`).pipe(catchError(handleErrorHelper));
  }

  getFaqListByQuestionId(id: number): Observable<Array<FAQ>> {
    return this.http.get<Array<FAQ>>(`${this.path_faq}/?questionId=${id}`).pipe(catchError(handleErrorHelper));
  }

  getFAQByQuestionIdAndLanguage(id: number, lang: string): Observable<FAQ> {
    return this.http.get<FAQ>(`${this.path_faq}/?questionId=${id}&lang=${lang}`).pipe(catchError(handleErrorHelper));
  }

  getFaqListByLanguage(lang: string): Observable<Array<FAQ>> {
    return this.http.get<Array<FAQ>>(`${this.path_faq}/?lang=${lang}`).pipe(catchError(handleErrorHelper));
  }

  add(item: FAQ): Observable<FAQ> {
    return this.http.post<FAQ>(`${this.path_faq}`, item).pipe(catchError(handleErrorHelper));
  }

  update(item: FAQ): Observable<FAQ> {
    return this.http.put<FAQ>(`${this.path_faq}/${item.id}`, item).pipe(catchError(handleErrorHelper));
  }

  delete(item: FAQ): Observable<FAQ> {
    return this.http.delete<FAQ>(`${this.path_faq}/${item.id}`).pipe(catchError(handleErrorHelper));
  }
}
