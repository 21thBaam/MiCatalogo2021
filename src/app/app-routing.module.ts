import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { Page404Component } from './components/page404/page404.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: Page404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
