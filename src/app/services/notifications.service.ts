import { Injectable } from '@angular/core';
import { trending } from '../models/trending.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  foryou: trending[] = [
    {
      country: 'kenya',
      topic: 'Christine nampeera',
      postscount: 100
    },
    {
      country: 'kenya',
      topic: '#viralvide',
      postscount: 2300
    },
    {
      country: 'kenya',
      topic: 'BREAKING NEWS',
      postscount: 1520
    },
    {
      country: 'kenya',
      topic: 'Uhuru',
      postscount: 5460
    },
    {
      country: 'kenya',
      topic: '#bubagirl',
      postscount: 9820
    }

  ]

  whotofollow:{handle:string,name:string}[]=[
    {handle:'@KRAkenya',name:'Kra Kenya'},
    {handle:'@ElonMask',name:'elon mask'},
    {handle:'@AjneDoe',name:'Jane doe'},
    {handle:'@KimChan',name:'chan kim'},
  ]
  constructor() { }
}
