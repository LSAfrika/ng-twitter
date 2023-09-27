import { Component, inject } from '@angular/core';
import { TweetsService } from 'src/app/service/tweets.service';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
public UIS=inject(UiService)
public tweetservice=inject(TweetsService)

constructor(){this.UIS.currentpage='profile';this.UIS.selectednavigation=6}

activemenu(active:number){
this.UIS.activedetailsmenu=active
}
}
