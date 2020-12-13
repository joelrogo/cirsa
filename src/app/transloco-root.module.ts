import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_MISSING_HANDLER,
  translocoConfig,
  TranslocoLoader,
  TranslocoMissingHandler,
  TranslocoModule,
} from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(langPath: string): Observable<Translation> {
    return this.http.get<Translation>(`assets/i18n/${langPath}.json`);
  }
}

@Injectable()
export class CustomHandler implements TranslocoMissingHandler {
  handle(key: string): string {
    console.warn(`Untranslated key: '${key}'`);
    return key;
  }
}

export const customMissingHandler = {
  provide: TRANSLOCO_MISSING_HANDLER,
  useClass: CustomHandler,
};

@NgModule({
  imports: [
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
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'es',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
    customMissingHandler,
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoRootModule {}
