import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  public UIS=inject(UiService)
  public Messagesvc=inject(MessagesService)
  constructor(){
    this.UIS.acvtivepage('messages')
    this.UIS.selectedmenunavigationmethod(3)

  }

  openrecentmessagesmodal(){
    this.UIS.openmessagesearch=true
  }
  closerecentmessagesmodal(){
    this.UIS.openmessagesearch=false

  }
}
