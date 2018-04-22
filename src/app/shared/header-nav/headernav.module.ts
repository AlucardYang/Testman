import { NgModule } from '@angular/core';

import { HeaderNavComponent } from './headernav.component';
import { HeaderNavService } from './headernav.service';

@NgModule({
  imports: [
  ],
  declarations: [
    HeaderNavComponent,
  ],
  exports: [
    HeaderNavComponent,
  ],
  providers: [
    HeaderNavService,
  ]
})
export class HeaderNavModule { }
