import { Injectable } from '@angular/core';
import { messages } from '../models/messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  directmessages:messages[]=[
    {
      name:'telkom',
      handle:'TKomKenya',
      imgurl:'../../../assets/pic6.jpg',
      date:1675326793,
      message:`hello we will get back to the issue at hand as described
      by you
      `

    },
    {
      name:'Jane',
      handle:'JaneDoe',
      imgurl:'../../../assets/pic1.jpg',
      date:1697903753,
      message:`true as you stated all shall be well as per philippians 1:6 `

    },  
    {
      name:'elon',
      handle:'elonMask',
      imgurl:'../../../assets/pic3.jpg',
      date:1685020839,
      message:`hello we welcome you to twitter
      `

    },   
    {
      name:'Hakim',
      handle:'abdulhakim',
      imgurl:'../../../assets/pic4.jpg',
      date:1701374882,
      message:`nice coach the session was fabtastic today   `

    },  
    {
      name:'joga',
      handle:'Jogabonitofootball',
      imgurl:'../../../assets/pic5.jpg',
      date:1683837062,
      message:`more skill shall be added to the next collection video
      by you
      `

    }
  ]



  
  
  
  
  // 1691337540
  // 1691189485
  // 1690249147
  // 1684207921
  // 1695973960
  // 1687693865

// 1700613995
// 1689973646
// 1698620859
// 1694659441
// 1698532597

  




  constructor() { }
}
