import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './frameworks/environments/environment';
import { FrameworksModule } from './frameworks/frameworks.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FrameworksModule);
