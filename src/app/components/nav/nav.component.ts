import { UiService } from 'src/app/service/ui.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public UIS= inject(UiService)
}
