import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  _showMobileMenu = new BehaviorSubject<boolean>(false);
  showMobileMenu$ = this._showMobileMenu.asObservable();


  completedIsOpen:boolean = true;
  private subject = new Subject<any>();
  toggleMediaMenu(): void {
    this._showMobileMenu.next(!this._showMobileMenu.value);
  }
  toggleCompletedIsOpen():void{
    this.completedIsOpen = !this.completedIsOpen;
    this.subject.next(this.completedIsOpen);
    console.log(this.completedIsOpen)
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
