import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  public UIS=inject(UiService)
constructor(){
  this.UIS.acvtivepage('explore')
  this.UIS.selectedmenunavigationmethod(1)

}
}
