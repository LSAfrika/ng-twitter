import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public UIS=inject(UiService)
constructor(){
  this.UIS.acvtivepage('home')
  this.UIS.selectedmenunavigationmethod(0)
this.UIS.tweetstats=true


}


}
