import { NgModule } from '@angular/core';
import { SharedModule } from './shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { FrameworkRoutingModule } from './framework-routing.module';

import { HeaderNavModule } from '../app/shared/header-nav/headernav.module';
import { LeftMenuModule } from '../app/shared/left-menu/leftmenu.module';

import { FrameworkComponent } from './framework.component';
import { TestManService } from '../app/shared/services/testman.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    FrameworkRoutingModule,
    HeaderNavModule,
    LeftMenuModule,
  ],
  declarations: [
    FrameworkComponent,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: 'testman'
    },
    TestManService,
  ],
  bootstrap: [
    FrameworkComponent,
  ]
})
export class FrameworkModule { }
