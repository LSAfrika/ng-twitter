import { UiService } from 'src/app/service/ui.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss']
})
export class MobilenavComponent {

  public UIS=inject(UiService)

  home(){
    this.UIS.switchnav(0,'home')
    this.UIS.acvtivepage('home')

  }
  explore(){
this.UIS.switchnav(1,'explore')
this.UIS.acvtivepage('explore')

  }
  notifications(){
    this.UIS.acvtivepage('notifications')
    this.UIS.switchnav(2,'notifications')
  }

  messages(){
    this.UIS.acvtivepage('messages')
    this.UIS.switchnav(3,'messages')

  }

}
