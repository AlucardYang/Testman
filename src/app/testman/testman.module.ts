import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SharedModule } from '../shared/shared.module';

import { TestmanRouteModule } from './testman-route.module';

import { TestmanComponent } from './testman.component';

@NgModule({
  imports: [
    // SharedModule,
    TestmanRouteModule,
  ],
  exports: [

  ],
  declarations: [
    TestmanComponent,
  ],
  providers: [],
})
export class TestmanModule { }
