import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { SendtweetComponent } from '../../components/sendtweet/sendtweet.component';
import { MobilenavComponent } from '../../components/mobilenav/mobilenav.component';
import { MorepopoverComponent } from '../../components/morepopover/morepopover.component';
import { FabComponent } from '../../components/fab/fab.component';
import { ChatComponent } from '../../components/chat/chat.component';
import { RightpanelComponent } from '../../components/rightpanel/rightpanel.component';
import { VerifiedChooseComponent } from 'src/app/pages/verified-choose/verified-choose.component';
import { ComposetweetComponent } from '../../components/composetweet/composetweet.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';


@NgModule({
  declarations: [
    NavComponent,
    TweetComponent,
    SidenavComponent,
    SendtweetComponent,
    MobilenavComponent,MorepopoverComponent,FabComponent, ChatComponent, RightpanelComponent,
    VerifiedChooseComponent,
    ComposetweetComponent,
    WelcomeComponent

  ],
  imports: [
    CommonModule,
  ],exports:[
    NavComponent,
    SidenavComponent,
    TweetComponent,
    SendtweetComponent,
    MobilenavComponent,MorepopoverComponent,FabComponent,
    ChatComponent,RightpanelComponent,VerifiedChooseComponent,ComposetweetComponent,WelcomeComponent

  ]
})
export class SharedModule { }
