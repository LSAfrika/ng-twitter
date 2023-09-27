import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-composetweet',
  templateUrl: './composetweet.component.html',
  styleUrls: ['./composetweet.component.scss']
})
export class ComposetweetComponent {

  public UIS=inject(UiService)
}
