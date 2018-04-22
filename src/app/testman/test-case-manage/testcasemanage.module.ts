import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../../frameworks/shared/index';
import { TestmanModule } from '../testman.module';

import { TestCaseManageComponent } from './testcasemanage.component';
import { TestCaseManageService } from './testcasemanage.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: TestCaseManageComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    TestCaseManageComponent,
  ],
  providers: [
    TestCaseManageService,
  ],
})
export class TestCaseManageModule { }
