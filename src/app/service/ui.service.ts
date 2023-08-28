import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {


selectednavigation=0

public popover$=new BehaviorSubject(false)
constructor(private router:Router){}

switchnav(input:number,route:string){
  this.selectednavigation=input
  this.router.navigateByUrl(`${route}`)

}

disablepopover(){
  this.popover$.next(false)
}

enablepopover(){
  this.popover$.next(true)

}

}
