// App
import {TranslatePipe} from "./common/directives/translate-pipe";
export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';
import {provide} from 'angular2/core'
import {HTTP_PROVIDERS} from "angular2/http";
import {TranslateLoader} from "ng2-translate/ng2-translate";
import {Http} from "angular2/http";
import {TranslateStaticLoader} from "ng2-translate/ng2-translate";
import {TranslateService} from "ng2-translate/ng2-translate";

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  TranslatePipe,
  HTTP_PROVIDERS,
  provide(TranslateLoader, {
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/data/translations', '.json'),
    deps: [Http]
  }),
  TranslateService
];
