import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Notfound404RoutingModule } from './notfound404-routing.module';
import { Notfound404Component } from './notfound404.component';


@NgModule({
  declarations: [
    Notfound404Component
  ],
  imports: [
    CommonModule,
    Notfound404RoutingModule
  ]
})
export class Notfound404Module { }
