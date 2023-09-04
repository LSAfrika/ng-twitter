import { Component, Input } from '@angular/core';
import { messages } from 'src/app/models/messages.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
@Input() message!:messages 
@Input() screenwidth!:number 


ngOnInit(){
console.log('screen width',this.screenwidth);

}
}
