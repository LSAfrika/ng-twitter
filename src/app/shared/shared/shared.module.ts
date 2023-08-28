import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { SendtweetComponent } from '../../components/sendtweet/sendtweet.component';
import { MobilenavComponent } from '../../components/mobilenav/mobilenav.component';
import { MorepopoverComponent } from '../../components/morepopover/morepopover.component';


@NgModule({
  declarations: [
    NavComponent,
    TweetComponent,
    SidenavComponent,
    SendtweetComponent,
    MobilenavComponent,MorepopoverComponent

  ],
  imports: [
    CommonModule,
  ],exports:[
    NavComponent,
    SidenavComponent,
    TweetComponent,
    SendtweetComponent,
    MobilenavComponent,MorepopoverComponent

  ]
})
export class SharedModule { }
