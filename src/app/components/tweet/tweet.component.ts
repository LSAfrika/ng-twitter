import { UiService } from './../../service/ui.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

public UIS=inject(UiService)
  @Input()tweetdata:string='' ;
  tweetvalue:string=''
constructor(){
  // console.log('tweet input',this.tweetdata);


}
ngOnInit(){
  // console.log('tweet input',this.tweetdata);
  this.tweetvalue=this.tweetdata ||'hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda voluptas quas incidunt id saepe debitis sapiente odit. Quam voluptatum alias nulla tempore vitae '



}

}
