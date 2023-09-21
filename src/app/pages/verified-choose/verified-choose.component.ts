import { Component, inject } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-verified-choose',
  templateUrl: './verified-choose.component.html',
  styleUrls: ['./verified-choose.component.scss']
})
export class VerifiedChooseComponent {
public UIS= inject(UiService)

toggletrue(){
  this.UIS.outlineverfied=true
}
togglefalse(){
  this.UIS.outlineverfied=false
}
}
