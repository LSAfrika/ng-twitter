import { Component, HostListener, inject } from '@angular/core';
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
  public getScreenWidth: number=0;
  public getScreenHeight: number=0;
  constructor(){
    this.UIS.acvtivepage('messages')
    this.UIS.selectedmenunavigationmethod(3)
    this.getScreenWidth=window.innerWidth
    this.getScreenHeight=window.innerHeight
    console.log('current width: ',this.getScreenWidth);
    
  }

  

  


    
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  openrecentmessagesmodal(){
    this.UIS.openmessagesearch=true
  }
  closerecentmessagesmodal(){
    this.UIS.openmessagesearch=false

  }
}
