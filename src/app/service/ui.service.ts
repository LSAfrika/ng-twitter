import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {


selectednavigation=0
tweetstats=true
openrecentsearch=false
openmessagesearch=false
pagetitle='home'
disabled=true
exploremodal=false
public popover$=new BehaviorSubject(false)
public dropdowncreator$=new BehaviorSubject(false)
public dropdownprofessional$=new BehaviorSubject(false)
public dropdownsettings$=new BehaviorSubject(false)
public verified$=new BehaviorSubject(false)
public compose$=new BehaviorSubject(false)
public welcome$=new BehaviorSubject(true)
public outlineverfied=true
public activenavmenu=0
public activedetailsmenu=0

  currentpage: string='';


constructor(private router:Router){}


switchnav(input:number,route:string){
  this.currentpage=route
  console.log('current route:',route);

  this.selectednavigation=input
  if(route!=='lists') {

    this.router.navigateByUrl(`${route}`)
  }
  if(route=='lists') {
  // this.currentpage=route

    this.router.navigateByUrl(`LS_Afrika/${route}`)
  }

}

disablepopover(){

  if(this.disabled==true)return
  this.popover$.next(false)
    this.dropdowncreator$.next(false)
  this.dropdownprofessional$.next(false)
  this.dropdownsettings$.next(false)
  console.log('pop over disabled');
  this.disabled=true

}

enablepopover(){
  this.popover$.next(true)

}

leave(){

  this.disabled=true

  // console.log('mouse left');

}

enter(){
  this.disabled=false
  // console.log('mouse enter');

}

activemenuselect(active:number){
  this.activenavmenu=active

}



acvtivepage(page:string){
  this.currentpage=page
}

selectedmenunavigationmethod(select:number){
  this.selectednavigation=select
}

openverifiedcomponent(){
  this.verified$.next(true)
}

closeverifiedcomponent(){
  this.verified$.next(false)
}

opencomposepanel(){
  this.compose$.next(true)
}

closecomposepanel(){
  this.compose$.next(false)
}

}
