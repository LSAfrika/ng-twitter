import { Component } from '@angular/core';
import { UiService } from './service/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitterui';

  constructor(public UIS:UiService){}
}
