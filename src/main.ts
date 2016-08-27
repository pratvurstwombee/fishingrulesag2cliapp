import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent, environment, Configuration, appRouterProviders } from './app/';

if (environment.production) {
  enableProdMode();
}

// Bootstrapping to instatiate a component to user at root-level
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  appRouterProviders,
  Configuration
]).catch(error => console.error(error));
