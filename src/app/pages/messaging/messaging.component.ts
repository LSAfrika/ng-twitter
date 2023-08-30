import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent {



  public UIS=inject(UiService)
  constructor(){
    this.UIS.acvtivepage('Messages')
    this.UIS.selectedmenunavigationmethod(3)
  }
}
