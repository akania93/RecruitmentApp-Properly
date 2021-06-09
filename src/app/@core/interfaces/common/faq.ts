import { Observable } from 'rxjs';

export interface FAQ {
  id?: number | undefined;
  questionId: number;
  title?: string;
  body?: string;
  lang?: string;
}

export abstract class FAQData {
  abstract getFAQList(): Observable<Array<FAQ>>;
  abstract getFaqListByQuestionId(id: number): Observable<Array<FAQ>>;
  abstract getFAQByQuestionIdAndLanguage(id: number, lang: string): Observable<FAQ>;
  abstract getFaqListByLanguage(lang: string): Observable<Array<FAQ>>;
  abstract add(faq: FAQ): Observable<FAQ>;
  abstract update(faq: FAQ): Observable<FAQ>;
  abstract delete(faq: FAQ): Observable<FAQ>;
}
