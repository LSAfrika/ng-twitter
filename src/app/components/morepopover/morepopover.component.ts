import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-morepopover',
  templateUrl: './morepopover.component.html',
  styleUrls: ['./morepopover.component.scss']
})
export class MorepopoverComponent {
constructor(public UIS:UiService){}


ngOnDestroy(){

}

togglecreator(){
  this.UIS.dropdowncreator$.value?this.UIS.dropdowncreator$.next(false):this.UIS.dropdowncreator$.next(true)

  console.log('drop down creatore value',this.UIS.dropdowncreator$.value);

}



toggleprofessional(){
  this.UIS.dropdownprofessional$.value?this.UIS.dropdownprofessional$.next(false):this.UIS.dropdownprofessional$.next(true)

  // console.log('drop down creatore value',this.UIS.dropdowncreator$.value);

}

togglesettings(){
  this.UIS.dropdownsettings$.value?this.UIS.dropdownsettings$.next(false):this.UIS.dropdownsettings$.next(true)

  // console.log('drop down creatore value',this.UIS.dropdowncreator$.value);

}



}
