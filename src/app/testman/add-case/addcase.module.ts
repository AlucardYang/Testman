import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../../frameworks/shared/index';

import { AddCaseComponent } from './addcase.component';
import { AddCaseService } from './addcase.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: AddCaseComponent
    }])
  ],
  exports: [

  ],
  declarations: [
    AddCaseComponent,
  ],
  providers: [
    AddCaseService,
  ],
})
export class AddCaseModule { }
