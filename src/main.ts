import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './framework/environments/environment';
import { FrameworkModule } from './framework/framework.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FrameworkModule);
