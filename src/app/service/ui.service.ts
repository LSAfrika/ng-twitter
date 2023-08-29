import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {


selectednavigation=0

disabled=true
public popover$=new BehaviorSubject(false)
public dropdowncreator$=new BehaviorSubject(false)
public dropdownprofessional$=new BehaviorSubject(false)
public dropdownsettings$=new BehaviorSubject(false)
constructor(private router:Router){}
public popoverobs$=this.popover$.asObservable()
switchnav(input:number,route:string){
  this.selectednavigation=input
  this.router.navigateByUrl(`${route}`)

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

}
