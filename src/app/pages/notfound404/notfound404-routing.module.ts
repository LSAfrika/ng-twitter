import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound404Component } from './notfound404.component';

const routes: Routes = [{ path: '', component: Notfound404Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Notfound404RoutingModule { }
