import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxPlural' })
export class PluralPipe implements PipeTransform {
  transform(input: number, label: string, pluralLabel = ''): string {
    const _input = input || 0;
    return _input === 1 ? `${_input} ${label}` : pluralLabel ? `${_input} ${pluralLabel}` : `${_input} ${label}s`;
  }
}
