import { Component, inject } from '@angular/core';
import { trending } from 'src/app/models/trending.interface';
import { UiService } from 'src/app/service/ui.service';



@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})


export class ExploreComponent {
  public UIS = inject(UiService)

  foryou: trending[] = [
    {
      country: 'kenya',
      topic: 'Christine nampeera',
      postscount: 100
    },
    {
      country: 'kenya',
      topic: '#viralvide',
      postscount: 2300
    },
    {
      country: 'kenya',
      topic: 'BREAKING NEWS',
      postscount: 1520
    },
    {
      country: 'kenya',
      topic: 'Uhuru',
      postscount: 5460
    },
    {
      country: 'kenya',
      topic: '#bubagirl',
      postscount: 9820
    }

  ]

  modalstate=false

  constructor() {
    this.UIS.acvtivepage('explore')
    this.UIS.selectedmenunavigationmethod(1)

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
