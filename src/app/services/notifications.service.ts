import { Injectable } from '@angular/core';
import { Lists } from '../models/lists.interface';
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

  lists:Lists[]=[
{
  name: 'indie Hub',
  members: 256,
  mutualfollowers: 65,
  higlightedfollower:'LSA frika@LSAfrika'
},
{
  name: 'Kenya Moja',
  members: 2500,
  mutualfollowers: 15,
  higlightedfollower:'elon@ElonMask'
},
{
  name: 'Footbal 254',
  members: 1000,
  mutualfollowers: 23,
  higlightedfollower:'min@Min_jii'
},

  ]

  whotofollow:{handle:string,name:string}[]=[
    {handle:'@KRAkenya',name:'Kra Kenya'},
    {handle:'@ElonMask',name:'elon mask'},
    {handle:'@AjneDoe',name:'Jane doe'},
    {handle:'@KimChan',name:'chan kim'},
  ]
  constructor() { }
}
