import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-morepopover',
  templateUrl: './morepopover.component.html',
  styleUrls: ['./morepopover.component.scss']
})
export class MorepopoverComponent {
constructor(public UIS:UiService){}
}
