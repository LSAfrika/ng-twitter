import { Component, HostListener } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public getScreenWidth: number=0;
  public getScreenHeight: number=0;
  

  constructor(public UIS:UiService){
    this.getScreenWidth=window.innerWidth
    this.getScreenHeight=window.innerHeight
    console.log('current width: ',this.getScreenWidth);
    
  }

    
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

}
