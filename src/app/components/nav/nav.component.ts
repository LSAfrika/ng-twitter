import { UiService } from 'src/app/service/ui.service';
import { Component, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public UIS= inject(UiService)

  public getScreenWidth: number=window.innerWidth;
  public getScreenHeight: number=window.innerHeight;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  openrecentsearchmodal(){
    this.UIS.openrecentsearch=true
    console.log('open recent modal fired');

  }

  closerecentsearchmodal(){
    this.UIS.openrecentsearch=false
    console.log('open recent modal fired');

  }

}
