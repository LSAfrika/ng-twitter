import { UiService } from 'src/app/service/ui.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent {

  public UIS=inject(UiService)
}
