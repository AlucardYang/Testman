import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'testCaseManage',
    pathMatch: 'full'
  },
  {
    path: 'testCaseManage',
    loadChildren: './test-case-manage/testcasemanage.module#TestCaseManageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class TestmanRouteModule {

}
