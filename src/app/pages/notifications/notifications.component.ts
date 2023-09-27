import { Component, inject } from '@angular/core';
import { TweetsService } from 'src/app/service/tweets.service';
import { UiService } from 'src/app/service/ui.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  tweetdata='hello there welcome to tweeter this is a test tweet'

  public UIS=inject(UiService)
  public tweetsvc=inject(TweetsService)
  public notifiservice=inject(NotificationsService)
  modalstate=false

  constructor(){
    this.UIS.acvtivepage('notifications')
    this.UIS.selectedmenunavigationmethod(2)
this.UIS.tweetstats=false
    console.log('data to be sent to tweet component',this.tweetdata);
    console.log(this.UIS.currentpage);
    this.UIS.selectednavigation=2


  }

  enable(){
    this.modalstate=true
    console.log('entered modal');

      }
      disable(){
    this.modalstate=false
    console.log('left modal');


      }

      closemodal(){
        if(this.modalstate==false)return

        this.UIS.exploremodal=false

      }
      exitmodal(){


        this.UIS.exploremodal=false

      }

      openmodal(){


        this.UIS.exploremodal=true

      }

}
