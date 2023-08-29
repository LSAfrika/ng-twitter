import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  public UIS=inject(UiService)
  constructor(){
    this.UIS.acvtivepage('messages')
    this.UIS.selectedmenunavigationmethod(3)

  }

}
