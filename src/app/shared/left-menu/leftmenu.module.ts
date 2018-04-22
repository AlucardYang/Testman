import { NgModule } from '@angular/core';

import { LeftMenuComponent } from './leftmenu.component';
import { LeftMenuService } from './leftmenu.service';

@NgModule({
  imports: [
  ],
  declarations: [
    LeftMenuComponent,
  ],
  exports: [
    LeftMenuComponent,
  ],
  providers: [
    LeftMenuService,
  ],
})
export class LeftMenuModule { }
