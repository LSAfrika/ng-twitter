import { UiService } from 'src/app/service/ui.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss']
})
export class MobilenavComponent {

  public UIS=inject(UiService)

}
