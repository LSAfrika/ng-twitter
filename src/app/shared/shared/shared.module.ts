import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    NavComponent,
    TweetComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NavComponent,
    SidenavComponent,
    TweetComponent,
  ]
})
export class SharedModule { }
