import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.scss']
})
export class RightpanelComponent {

  public UIS=inject(UiService)
  public notifiservice=inject(NotificationsService)
  modalstate=false



  enable(){
    this.modalstate=true
    console.log('entered modal');

      }
      disable(){
    this.modalstate=false
    console.log('left modal');


      }

  exitmodal(){


    this.UIS.exploremodal=false

  }

  openmodal(){


    this.UIS.exploremodal=true

  }


  closemodal(){
    if(this.modalstate==false)return

    this.UIS.exploremodal=false

  }

}
