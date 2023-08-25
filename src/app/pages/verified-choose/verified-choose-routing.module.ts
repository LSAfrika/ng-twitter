import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiedChooseComponent } from './verified-choose.component';

const routes: Routes = [{ path: '', component: VerifiedChooseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifiedChooseRoutingModule { }
