import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifiedChooseRoutingModule } from './verified-choose-routing.module';
import { VerifiedChooseComponent } from './verified-choose.component';


@NgModule({
  declarations: [
    VerifiedChooseComponent
  ],
  imports: [
    CommonModule,
    VerifiedChooseRoutingModule
  ]
})
export class VerifiedChooseModule { }
