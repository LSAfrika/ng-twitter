import { Component, inject } from '@angular/core';
import { trending } from 'src/app/models/trending.interface';
import { UiService } from 'src/app/service/ui.service';
import { NotificationsService } from 'src/app/services/notifications.service';



@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})


export class ExploreComponent {
  public UIS = inject(UiService)

  public notifiservice=inject(NotificationsService)

  modalstate=false

  constructor() {
    this.UIS.acvtivepage('explore')
    this.UIS.selectedmenunavigationmethod(1)

    console.log(this.UIS.currentpage);


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
