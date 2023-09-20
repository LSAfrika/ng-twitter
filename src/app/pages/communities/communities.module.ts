import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunitiesRoutingModule } from './communities-routing.module';
import { CommunitiesComponent } from './communities.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    CommunitiesComponent
  ],
  imports: [
    CommonModule,
    CommunitiesRoutingModule,SharedModule
  ]
})
export class CommunitiesModule { }
