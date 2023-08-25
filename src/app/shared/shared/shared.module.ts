import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { SendtweetComponent } from '../../components/sendtweet/sendtweet.component';



@NgModule({
  declarations: [
    NavComponent,
    TweetComponent,
    SidenavComponent,
    SendtweetComponent
  ],
  imports: [
    CommonModule,
  ],exports:[
    NavComponent,
    SidenavComponent,
    TweetComponent,
    SendtweetComponent
  ]
})
export class SharedModule { }
