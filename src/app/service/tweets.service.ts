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

  tweets:tweet[]=[
    {
      name:'telkom',
      handle:'TKomKenya',
     replycount:2000,
     repostcount:1350,
     viewcount:2390,
     likecount:500,
      timeposted:1608977877,
      tweet:`hello we will get back to the issue at hand as described
      by you
      `

    },
    {
      name:'Jane',
      handle:'JaneDoe',
      replycount:2000,
      repostcount:1350,
      viewcount:2390,
      likecount:500,
      timeposted:1693468431,
      tweet:`true as you stated all shall be well as per philippians 1:6 `

    },
    {
      name:'elon',
      handle:'elonMask',
      replycount:2000,
      repostcount:1350,
      viewcount:2390,
      likecount:500,
      timeposted:1690790031,
      tweet:`hello we welcome you to twitter
      `

    },
    {
      name:'Hakim',
      handle:'abdulhakim',
      replycount:2000,
      repostcount:1350,
      viewcount:2390,
      likecount:500,
      timeposted:1692950031,
      tweet:`nice coach the session was fabtastic today   `

    },
    {
      name:'Addidas',
      handle:'Addidasfootball',
      replycount:2000,
      repostcount:1350,
      viewcount:2390,
      likecount:500,
      timeposted:1693036431,
      tweet:`euro 2024 is just around the corener are yoo excited
      `

    },
    {
      name:'WHO',
      handle:'WorldHealthOrg',
      replycount:1000,
      repostcount:1750,
      viewcount:3390,
      likecount:5100,
      timeposted:1693036431,
      tweet:`new covid vaccines are here
      `

    },
    {
      name:'Anto neo',
      handle:'NeoAnto',
      replycount:2000,
      repostcount:1350,
      viewcount:2390,
      likecount:500,
      timeposted:1693036431,
      tweet:`teen republic just went live
      `

    },
    {
      name:'monergism org',
      handle:'monergism',
      replycount:2000,
      repostcount:1350,
      viewcount:2390,
      likecount:500,
      timeposted:1693036431,
      tweet:`verse of the day philippians 1:6
      `

    }
  ]
  constructor() { }
}
