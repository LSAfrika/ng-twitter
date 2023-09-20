import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent {
private uis=inject(UiService)

constructor(){this.uis.currentpage='communities'}
}
