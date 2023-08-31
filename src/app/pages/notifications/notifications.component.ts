import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  tweetdata='hello there welcome to tweeter this is a test tweet'

  public UIS=inject(UiService)
  constructor(){
    this.UIS.acvtivepage('notifications')
    this.UIS.selectedmenunavigationmethod(2)
this.UIS.tweetstats=false
    console.log('data to be sent to tweet component',this.tweetdata);

  }

}
