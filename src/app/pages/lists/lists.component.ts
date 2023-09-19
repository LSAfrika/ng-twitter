import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
public UIS=inject(UiService)
public Lists=inject(NotificationsService)
constructor(){this.UIS.currentpage='lists'}
}
