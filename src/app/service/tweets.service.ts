import { Injectable } from '@angular/core';
import { tweet, tweetreply } from "../models/tweet.interface";
@Injectable({
  providedIn: 'root'
})
export class TweetsService {


  notificationtweets:tweetreply[]=[
    {
      name:'telkom',
      handle:'TKomKenya',
      replyingtohandle:'@LSAfrika',
      timeposted:1608977877,
      tweetreply:`hello we will get back to the issue at hand as described
      by you
      `

    },
    {
      name:'Jane',
      handle:'JaneDoe',
      replyingtohandle:'@LSAfrika',
      timeposted:1693468431,
      tweetreply:`true as you stated all shall be well as per philippians 1:6 `

    },   {
      name:'elon',
      handle:'elonMask',
      replyingtohandle:'@LSAfrika',
      timeposted:1690790031,
      tweetreply:`hello we welcome you to twitter
      `

    },   {
      name:'Hakim',
      handle:'abdulhakim',
      replyingtohandle:'@LSAfrika',
      timeposted:1692950031,
      tweetreply:`nice coach the session was fabtastic today   `

    },   {
      name:'joga',
      handle:'Jogabonitofootball',
      replyingtohandle:'@LSAfrika',
      timeposted:1693036431,
      tweetreply:`more skill shall be added to the next collection video
      by you
      `

    }
  ]
  constructor() { }
}
