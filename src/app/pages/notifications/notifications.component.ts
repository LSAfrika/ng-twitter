import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {


  public UIS=inject(UiService)
  constructor(){
    this.UIS.acvtivepage('notifications')
    this.UIS.selectedmenunavigationmethod(2)
  }

}
