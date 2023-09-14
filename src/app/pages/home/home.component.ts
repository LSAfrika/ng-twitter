import { Component, inject } from '@angular/core';
import { TweetsService } from 'src/app/service/tweets.service';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public UIS=inject(UiService)
  public tweetservice =inject(TweetsService)
constructor(){
  this.UIS.acvtivepage('home')
  this.UIS.selectedmenunavigationmethod(0)
this.UIS.tweetstats=true


}


}
