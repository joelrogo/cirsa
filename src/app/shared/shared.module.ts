import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoCurrencyPipe, TranslocoLocaleModule } from '@ngneat/transloco-locale';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslocoLocaleModule.init({
      langToLocaleMapping: {
        en: 'en-US',
        es: 'es-ES',
      },
      localeConfig: {
        global: {
          date: {
            dateStyle: 'long',
            timeStyle: 'long',
          },
        },
        localeBased: {
          'es-ES': {
            date: {
              timeStyle: 'medium',
            },
            currency: {
              minimumFractionDigits: 0,
            },
          },
        },
      },
    }),
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule, TranslocoCurrencyPipe],
})
export class SharedModule {}
