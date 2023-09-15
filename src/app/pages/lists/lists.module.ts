import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,SharedModule
  ]
})
export class ListsModule { }
